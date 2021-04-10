const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // エントリーポイント
  entry: "./src/js/app.js",
  output: {
    // 出力先 絶対パス
    // osの依存なしで行けるようにpath.resolve利用
    path: path.resolve(__dirname, "public"),
    // 出力ファイル
    filename: "js/bundle.js",
  },
  plugins: [
    // 出力先を一度きれいにしてくれる(ファイル削除)
    new CleanWebpackPlugin({}),
    // バンドルされたファイルを読み込む記述があるhtmlファイルを生成する
    new HtmlWebpackPlugin({
      template: "./src/html/index.html", // ここで指定したhtmlがひな形
    }),
  ],
};
