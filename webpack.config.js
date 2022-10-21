const { merge } = require("webpack-merge");
const devConfig = require("./webpack.dev.config");
const proConfig = require("./webpack.pro.config");
const baseConfig = require("./webpack.base.config");

module.exports = (env, args) => {
  let config = args.mode === "development" ? devConfig : proConfig;
  return merge(baseConfig, config);
};
