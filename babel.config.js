module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "usage", // 必要なポリフィルのみ取り込み
        corejs: 3, // 利用するcorejsのヴァージョン指定 デフォルトだと2だけどエラーが出るので3を指定する
        // debug: true,
      },
    ],
  ],
};
