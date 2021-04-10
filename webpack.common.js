const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

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
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["**/*", "!**.html"], //削除対象を指定 htmlファイルは除外
    }),
  ],
};
