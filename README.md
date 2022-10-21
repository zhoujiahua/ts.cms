# ts.cms

[https://juejin.cn/post/7036300546839412750](https://juejin.cn/post/7036300546839412750)

```shell

npm i -D webpack webpack-cli webpack-dev-server
npm i -D ts-loader typescript 
npm i -D html-webpack-plugin clean-webpack-plugin
npm i -D webpack-merge
```

```shell

npm i -D @babel/core @babel/preset-env babel-loader core-js
```

```javascript

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  // 指定入口文件
  entry: "./src/index.ts",
  
  // 开发模式使用，方便查错误
  devtool: "inline-source-map",
  
  // 配置服务器
  devServer: {
    contentBase: "./dist",
  },
  
  // 指定打包文件所在目录
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    environment: {
      arrowFunction: false, // 关闭webpack的箭头函数，可选
    },
  },
  
  // 用来设置引用模块
  resolve: {
    extensions: [".ts", ".js"],
  },
  
  // 配置webpack的loader
  module: {
    rules: [
      {
        test: /.ts$/,
        use: {
          loader: "ts-loader",
        },
        exclude: /node_modules/,
      },
    ],
  },
  
  // 配置webpack的插件
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
};
```

```javascript

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
```