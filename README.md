# My React Templete

## 1. Introduction
This is a template React for projects if you lazy and don't want spend most time for first setup steps. Hope my repository can help you.

## 2. Library & Framework
<div>
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original.svg" alt="React" height="50" />
  <img src="https://github.com/devicons/devicon/blob/master/icons/vitejs/vitejs-original.svg" alt="Vitejs" height="50" />
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-original.svg" alt="TypeScript" height="50" />
  <img src="https://github.com/devicons/devicon/blob/master/icons/antdesign/antdesign-original.svg" alt="Ant Design" height="50" />
  <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" alt="Redux" height="50" />
  <img src="https://github.com/devicons/devicon/blob/master/icons/axios/axios-plain-wordmark.svg" alt="Axios" height="50" />
  <img src="https://github.com/devicons/devicon/blob/master/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" height="50" />
</div>

## 3. How to setup?
### Requirement!
<ul>
  <li>Install Node.js lastest version</li>
  Check lastest version by cmd/shell:
  ```shell
    node -v
  ```
</ul>

### Setup time!
- Create and edit `.env` file base on `.env.example`
- Run `pnpm install` to install dependencies
- Run `pnpm run dev` to start in watch mode

## 4. Project structure

### Overview
- `@assets`: contains static files like images, fonts, videos, and other resources used in the project.
- `@components`: contains reusable React components. These components are typically small, functional units used across multiple parts of the application, such as buttons, modals, or dropdowns.
- `@config`: holds configuration files such as environment variables, API endpoints, or app-wide constants. This centralizes settings for easier management.
- `@hooks`: stores custom React hooks. These hooks encapsulate reusable logic.
- `@lang`: Contains language-related files for internationalization (i18n), such as JSON files with translations for different languages.
- `@layouts`: includes layout components that define the structure of the application, such as headers, footers, sidebars, and page wrappers.
- `@lib`: holds utility libraries or modules that don't fit elsewhere. This might include helper functions, third-party integrations, or custom logic that is not tied to specific components.
- `@pages`: contains React components for individual pages. Each component represents a full page in the application, often including route-specific logic.
- `@routes`: manages application routing, typically defining route paths and their corresponding components or views.
- `@services`: contains service files that handle communication with external APIs or other back-end logic. These files manage network requests, authentication, or other data operations.
- `@store`: holds state management files, such as Redux slices, contexts, or other centralized state logic for the application.
- `@themes`: contains theme-related files, such as color palettes, typography settings, or global styles for consistent design across the application.
- `@utils`: Includes utility functions or helpers used throughout the application, such as formatting functions, data transformation, or common algorithms.

### Guide for pages/components creating & displaying 
`@config`
Create a route direction path for the page that you want to display (Example: `Sample` page):
1. Open `routes.ts` in `@config`
2. Add direction path for `Sample` page:
```ts
const routes = {
  public: {
    home: "/",
    sample: "/sample", 
  },
};

export default routes;
```
===

`@components`
1. Create a forder inside `components` folder :
```
@Sample
```

2. Create an JSX element inside `Sample` folder:
```ts
const Sample = () => {
  return (
    <div>Sample</div>
  )
};

export default Sample;
```
*Trick: You can type `rafce` and press `Enter` to quick create `React Arrow Function Export Component`, or in orther words, like the code above*

3. Export element in `index.ts`
```ts
export { default } from './Sample'
```

4. Deep customize CSS for element (Optional - If you want use `styled-component`)
Create `Sample.styled.ts` in `Sample` folder:
Remember: If (element === HTML.Element):
```ts
import { styled } from 'styled-components';

export const SampleWrapper = styled.div`
  //Do the same thing when you code in .css file
`
```
else (element === AntDesign.Element || element === MUI.Element || ...):
```ts
import { styled } from 'styled-components';
import { Flex } from 'antd';

export const SampleWrapper = styled(Flex)`
  //Do the same thing when you code in .css file
`
```

After creating done, import it into JSX.Element (`Sample.tsx`):
```ts
import { SampleWrapper } from './Sample.styled';

const Sample = () => {
  return (
    <SampleWrapper>
      Sample
    </SampleWrapper>
  )
};

export default Sample;
```
In case, if you have too much styled element (the most way I have used):
```ts
import * as Styled from './Sample.styled';

const Sample = () => {
  return (
    <Styled.SampleWrapper>
      Sample
    </Styled.SampleWrapper>
  )
};

export default Sample;
```

5. Totally, your folder `Sample` will be look like this:
`@component`
   | Sample
      | Sample.tsx
      | Sample.styled.ts
      | index.ts

*Note: you can add and name the file base on other function. For example:*
- `Sample.data.ts`: contain sample data before calling API.
- `Sample.fields.ts`: contain fields can reusable in many modals.
- File name format: `<ElementName>.<type>.<ts/tsx>`

===

`@pages`
Creating page is the same creating components
For example, I have a sample page look like this:
`@pages`
   | Home
   | SamplePage
      | SamplePage.tsx
      | SamplePage.styled.ts
      | index.ts

If you want to use `Sample` component in `SamplePage`, you can import in `SamplePage.tsx`:
```ts
import * as Styled from './Sample.styled';
import { Sample } from '@/components/Sample'; //Import like this

const SamplePage = () => {
  return (
    <Styled.SamplePageWrapper>
      <Sample/>
    </Styled.SamplePageWrapper>
  )
};

export default SamplePage;
```
===

Now it's time to connect two parts before
`@routes`
1. Open `MainRoutes.tsx` file in `@routes`
2. Add path and page you want to display:
```ts
import SamplePage from '@/pages/SamplePage';
//...
const publicRoutes = {
    children: [
        //...
        { path: config.routes.public.sample, element: <SamplePage /> }
    ]
};
//...
```