const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

// common環境と開発環境をmergeしている
module.exports = merge(commonConfig, {
  mode: "development",
  watch: true,
});
