# Boiler18
A front end boilerplate using Webpack, Babel (ES8), React, React Router, Styled Components, Jest + Enzyme, ESLint, and Hot Module Reloading.

// Styled components 2.2.1-2.2.3 has a bug preventing HMR. So currently on 2.2.0 until .4 comes out

// Remember to remove lodash and it's tree shaking test in ContactScreen/index.js

## Get started

```
git clone https://github.com/placeholder your-project

cd your-project

rm -rf .git

yarn install

yarn start
```

---

## Components

- *SCSS* - Only one `.css` file is written (`style.css`). You need to import all other `.scss` files into the existing `style.scss` file.
- *JS* - Babel compiles the JS with the es2015 and es2017 presets. It is not concatenated, I suggest using `gulp-concat` if you need multiple files.
- *Images* - Images are minified from the `src/img` directory.

## Tools

- *Linting* - ESLint (extended from eslint recommended) lints the JS with some custom rules as well. Use `npm lint` to manually run it. If you want to lint on every git commit see [here](https://gist.github.com/wesbos/8aec9d2ff7f7cf9dd65ca2c20d5dfc23)
- *Hot reloading* - SCSS changes are injected. HTML and JS changes reload the page.