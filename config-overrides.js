const tsconfigPathsPlugs = require('tsconfig-paths-webpack-plugin')

const path = require('path')

module.exports = function override(config, env) {
  config.resolve.plugins = [
    ...config.resolve.plugins,
    new tsconfigPathsPlugs({
      configFile: path.resolve(__dirname, './tsconfig.json')})
  ]
  return config;
}
