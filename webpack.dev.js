const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const path = require("path");

// common環境と開発環境をmergeしている
module.exports = merge(commonConfig, {
  mode: "development",
  watch: true,
  devtool: "cheap-module-eval-source-map", // ソースマップの生成をする エラー発生箇所のバンドル前のファイルが見れる
  devServer: {
    open: true, // サーバー起動時にブラウザが自動で開く
    port: 9000,
    contentBase: path.resolve(__dirname, "public"), // ルートディレクトリ
  },
});
