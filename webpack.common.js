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
    chunkFilename: "js/[name].js",
  },
  // splichunckpluginの設定 どのファイルを分割するか
  optimization: {
    splitChunks: {
      chunks: "initial",
      cacheGroups: {
        vendor: {
          //任意のプロパティ
          // chunks: "initial",
          test: /node_modules/, // 分割の対象 今回はnode_modules以下
          name: "vendor", // 出力ファイル名
        },
        vendorModules: {
          // chunks: "initial",
          test: /src[\\/]js[\\/]modules/,
          name: "vendor-modules",
          minSize: 0, // 分割対象のモジュールの最小サイズ デフォルトは30000 = 30kb
          minChunks: 2, // モジュールがいくつの場所で利用されていれば分割するか指定する
        },
      },
    },
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
