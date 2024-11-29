import { I18n } from 'i18n-js';
import vi from './locales/vi.json';
import en from './locales/en.json';
import { createContext, useContext, useEffect, useState, ReactNode } from 'react';

// Khởi tạo i18n với các ngôn ngữ
const translations = { vi, en };
const i18n = new I18n(translations);

i18n.defaultLocale = 'vi';
i18n.locale = 'vi';
i18n.enableFallback = true;

// Định nghĩa kiểu dữ liệu cho ngữ cảnh
interface LanguageContextType {
    i18n: I18n;
    locale: string;
    switchLanguage: (newLocale: keyof typeof translations) => void;
}

// Tạo context với kiểu dữ liệu cụ thể
const LanguageContext = createContext<LanguageContextType | null>(null);

// Provider cho ngữ cảnh ngôn ngữ
const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocale] = useState<string>(i18n.defaultLocale);

    useEffect(() => {
        i18n.locale = locale;
    }, [locale]);

    const switchLanguage = (newLocale: keyof typeof translations) => {
        if (translations[newLocale]) {
            setLocale(newLocale);
        } else {
            console.error(`Language ${newLocale} not supported`);
        }
    };

    return (
        <LanguageContext.Provider value={{ i18n, locale, switchLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};

// Custom hook để sử dụng ngữ cảnh
export const useTranslation = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useTranslation must be used within a LanguageProvider');
    }
    return context;
};

export { i18n };
export default LanguageProvider;
