const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/app.ts",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    environment: {
      // 关闭webpack的箭头函数，可选
      arrowFunction: false,
    },
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: [
          {
            loader: "babel-loader",
            // 设置babel
            options: {
              // 设置预定义的环境
              presets: [
                [
                  // 指定环境的插件
                  "@babel/preset-env",
                  // 配置信息
                  {
                    // 要兼容的目标浏览器
                    targets: {
                      chrome: "58",
                      ie: "11",
                    },
                    // 指定corejs的版本
                    corejs: "3",
                    // 使用corejs的方式 "usage" 表示按需加载
                    useBuiltIns: "usage",
                  },
                ],
              ],
            },
          },
          {
            loader: "ts-loader",
          },
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
    }),
  ],
  resolve: {
    extensions: [".js", ".ts", ".tsx", ".jsx"],
  },
};
