// const tsconfigPathsPlugs = require('tsconfig-paths-webpack-plugin')

const path = require('path')
// const base = "./src"
module.exports = function override(config, env) {
  // config.resolve.plugins = [
  //   ...config.resolve.plugins,
  //   new tsconfigPathsPlugs({
  //     configFile: path.resolve(__dirname, './tsconfig.json')})
  // ]
  config.resolve.alias = {
    ...config.resolve.alias,
    "@containers": path.resolve(__dirname, './scr/containers'),
    "@components": path.resolve(__dirname, "./src/components"),
    "@assets": path.resolve(__dirname, "./src/assets"),
    "@shared": path.resolve(__dirname, "./src/shared"),
    "@styles": path.resolve(__dirname, "./src/styles"),
    "@utils": path.resolve(__dirname, "./src/utils"),
    "@context": path.resolve(__dirname, "./src/core/context"),
    "@models": path.resolve(__dirname, "./src/core/models"),
    "@services": path.resolve(__dirname, "./src/core/services"),
    "@router": path.resolve(__dirname, "./src/core/router"),
    "@configuration": path.resolve(__dirname, "./src/core/configuration")
  }
  return config;
}
