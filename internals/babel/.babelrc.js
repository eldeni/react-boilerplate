module.exports = {
  "env": {
    "local": {
      "plugins": [
        "react-hot-loader/babel",
        [ "babel-plugin-styled-components", {
          "displayName": false
        }]
      ]
    }
  },
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    ["@babel/preset-stage-2", { "decoratorsLegacy": true }]
  ],
};
