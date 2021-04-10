const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

// common環境と本番環境をmergeしている
module.exports = merge(commonConfig, {
  mode: "production",
});
