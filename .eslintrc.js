module.exports = {
  root: true, // このディレクトリより上の階層は見ない
  // 検証環境の指定　ブラウザとes2020までの構文はOK
  env: {
    browser: true,
    es2020: true,
  },
  parserOptions: {
    sourceType: "module", // import exportを利用してもエラーが発生しない
  },
  extends: ["eslint:recommended"], // 外部のルールを指定する　eslintのおすすめを適用
  rules: {
    "prefer-const": "error", // 更新しない変数宣言にconst利用してないとエラー
  },
};
