const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

// common環境と開発環境をmergeしている
module.exports = merge(commonConfig, {
  mode: "development",
  watch: true,
  devtool: "cheap-module-eval-source-map", // ソースマップの生成をする エラー発生箇所のバンドル前のファイルが見れる
});
