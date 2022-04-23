// Thanks to https://github.com/facebook/create-react-app/issues/10307#issuecomment-898889701
const rewire = require('rewire')
const defaults = rewire('react-scripts/scripts/build.js')

// In order to override the webpack configuration without ejecting the create-react-app
const config = defaults.__get__('config')

// Customize the Webpack configuration here,  for reference I have updated Webpack externals field
config.output.trustedTypes = {
  policyName: 'webpack-policy',
}
