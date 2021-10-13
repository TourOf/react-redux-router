# created steps

- Follow [guide](https://vitejs.dev/guide/#scaffolding-your-first-vite-project) and run `npm init vite@latest`
- Choose React and select Typescript
- Install Redux for React:`npm i @reduxjs/toolkit react-redux`
- Install React-router: `npm i react-router-dom @types/react-dom`

# Tech stack

- Redux: state and api manager
- Router: React-router

# 工程化

[2021 阿里 React 工程化](https://zhuanlan.zhihu.com/p/403970666)


## ESLint
why Vue cli can autofix eslint warning:
- https://cli.vuejs.org/core-plugins/eslint.html
plugin autofix eslint warning:
- https://www.npmjs.com/package/vite-plugin-eslint
rules that can autofix by eslint
- https://eslint.org/docs/rules/
> for example. you can add `"arrow-body-style": ["error", "always"]
` to `.eslintrc.js` rules support in https://eslint.org/docs/rules/arrow-body-style and use incorrect code for test.
