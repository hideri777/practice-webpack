const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // エントリーポイント
  // オブジェクトの形式で記述することで複数のファイルを指定できる
  entry: {
    app: "./src/js/app.js",
    another: "./src/js/another.js",
  },
  output: {
    // 出力先 絶対パス
    // osの依存なしで行けるようにpath.resolve利用
    path: path.resolve(__dirname, "public"),
    // 出力ファイル プレースホルダーapp/another.bundle.jsが出力される
    filename: "js/[name].bundle.js",
  },
  plugins: [
    // 出力先を一度きれいにしてくれる(ファイル削除)
    new CleanWebpackPlugin({}),
    // バンドルされたファイルを読み込む記述があるhtmlファイルを生成する
    new HtmlWebpackPlugin({
      template: "./src/html/index.html", // ここで指定したhtmlがひな形
      chunks: ["app"],
    }),
    new HtmlWebpackPlugin({
      filename: "another.html", // 出力ファイル名 指定がないとindex.htmlになってしまう
      template: "./src/html/another.html",
      chunks: ["another"], // エントリーポイント名を指定することで読み込むバンドルファイルを指定
    }),
  ],
};
