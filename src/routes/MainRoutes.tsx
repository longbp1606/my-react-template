import config from '@/config';
import MainLayout from '@/layouts/MainLayout';
import Home from '@/pages/Home';

const MainRouter = () => {
    return <MainLayout />;
};

const publicRoutes = {
    children: [
        { path: config.routes.public.home, element: <Home />}
    ]
};

const MainRoutes = {
    path: '/',
    element: <MainRouter />,
    children: [publicRoutes],
};

export default MainRoutes;