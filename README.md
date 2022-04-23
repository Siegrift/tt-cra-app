# --- Trusted Types documentation ---

1. To be able to use Trusted Types with React, you have to manually [build it from
   source](https://github.com/facebook/react/pull/16157#issuecomment-529956920), because the integration is hidden behind
   the feature flag. When building the version, be sure to check out of a particular React version(by checking out the version tag - e.g. `v17.0.2`).
2. You have to enable Trusted Types via CSP header or use the `<meta http-equiv=...>` tag in the `index.html`.
3. After this, you will be able to use unsafe properties and attributes such as `iframe.srcDoc` with a Trusted Type
   value and React will accept it. However webpack hot reload will break (since the webpack configuration is abstracted
   by react-scripts of CRA).
4. Trusted Types integration in webpack must be turned on [in the webpack
   config](https://webpack.js.org/guides/csp/#trusted-types). Unfortunately, the webpack configuration is hidden in an
   internal module. For now use [this
   workaround](https://github.com/facebook/create-react-app/issues/10307#issuecomment-898889701) to create a
   [start](https://github.com/Siegrift/master-thesis/blob/master/code/tt-cra-app/scripts/start.js) and
   [build](https://github.com/Siegrift/master-thesis/blob/master/code/tt-cra-app/scripts/build.js) scripts to use instead.
5. Trusted Types in Webpack do not propagate to webpack-dev-server which causes violations when there is an error in the
   application source code (which also prevents the error to be shown). The workaround for now is to use a [custom build
   of webpack-dev-server](https://github.com/Siegrift/webpack-dev-server) which uses Trusted Types policy internally.
   You can clone that repository and enable this dependency via [yarn
   resolutions](https://classic.yarnpkg.com/lang/en/docs/selective-version-resolutions/) or [npm
   overrides](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#overrides). _(See our
   [package.json](https://github.com/Siegrift/master-thesis/blob/master/code/tt-cra-app/package.json) for details)_.

_If you have troubles running this guide, try `rm -rf node_modules` and `yarn install`. If your problem persists let me
know by opening an issue and I'll try to help you._

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
