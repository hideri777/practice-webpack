const path = require("path");

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
};
