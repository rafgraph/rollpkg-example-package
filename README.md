# Rollpkg Example Package

This is the example package for [Rollpkg](https://github.com/rafgraph/rollpkg), a zero config way to create packages with Rollup and TypeScript. The built and published code for the example package can be [viewed here](https://unpkg.com/browse/rollpkg-example-package/).

This repo is setup to use [Rollpkg's default configs](https://github.com/rafgraph/rollpkg#using-default-configs-optional) for TypeScript, Prettier, ESLint and Jest, as well as to use [`npm link` for development](https://github.com/rafgraph/rollpkg#package-development-with-npm-link), and a pre-commit hook to format the code with Prettier.

The demo app for `rollpkg-example-package` is [deployed here](https://rollpkg.rafgraph.dev) using GitHub Pages, and the code is available in the [demo repo](https://github.com/rafgraph/rollpkg-example-package-demo).

### Demo app with `npm link`

- Use this package in a live demo app as you're working on it. With `rollpkg watch` and `npm link` you can see live changes in the demo app as you make changes to the code.
- To try this out:
  - Clone this repo and clone the [demo repo](https://github.com/rafgraph/rollpkg-example-package-demo), and run `npm install`.
  - In this repo's directory run `npm run dev` (this will link `rollpkg-example-package` to global `node_modules` and start `rollpkg watch`).
  - In the demo app's directory run `npm run dev` (this will link `rollpkg-example-package` from global `node_modules` to the demo app's `node_modules` and start the demo app, it's built with [Create React App](https://create-react-app.dev)).
  - Make some changes to the example package code and instantly see them reflected in the demo app.
  - When you're done press `ctrl c` in each terminal to stop the `watch` and `start` scripts respectively. The `dev` scripts will finish by performing some cleanup so everything is back to how it was (removes the link from global `node_modules` and re-installs the `npm` version of `rollpkg-example-package` in the demo app).
- If you like this dev experience, both this repo and the demo app's repo are templates, just click the respective `Use this template` button and you're good to go. Or alternatively create new repos from scratch and just copy over the `package.json` `scripts`.
- For a real world example that uses this setup, check out [`detect-it`](https://github.com/rafgraph/detect-it) and its [demo app](https://detect-it.rafgraph.dev).
