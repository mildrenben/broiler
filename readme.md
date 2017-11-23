# Broiler
A front end boilerplate using Webpack, Babel (ES8), React, React Router, Styled Components, Jest + Enzyme, ESLint, and Hot Module Reloading.

## Requirements

- Yarn

## Get started

```
git clone https://github.com/placeholder your-project

cd your-project

rm -rf .git

yarn install

yarn start
```

There are already some routes and components created as an example!

---

## Components

- *Webpack*
- *Babel* - Babel ES8 with features like async functions
- *React 16*
- *React Router V4* - [Docs](https://reacttraining.com/react-router/web/guides/philosophy)
- *Styled Components* - [Docs](https://www.styled-components.com/)
- *Test runners* - Jest + Enzyme for testing React components and other js
- *Hot Module Reloading*
- *Image Minification* - When you run `yarn build:prod` all your images will be crushed
- *ESLint*
- *Git hooks* - When committing and pushing, linting and testing is run
- *Minification + tree shaking*

### Caveats

- Styled components v2.2.1-2.2.3 has a bug preventing HMR. So we're currently on 2.2.0 until this issue is fixed. [Issue on Github](https://github.com/styled-components/styled-components/pull/1280).