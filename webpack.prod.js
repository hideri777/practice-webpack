const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const TerserPlugin = require("terser-webpack-plugin"); // 本番環境でconsole.logが出ないようにする

// common環境と本番環境をmergeしている
module.exports = merge(commonConfig, {
  mode: "production",
  optimization: {
    minimizer: [
      new TerserPlugin({
        extractComments: false, // ライブラリのライセンスコメントの抽出を防ぐ
        terserOptions: {
          compress: {
            drop_console: true, // console.logなど削除
          },
        },
      }),
    ],
  },
});
