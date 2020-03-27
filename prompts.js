/*
 * @Author: isboyjc
 * @Date: 2019-12-14 19:39:35
 * @LastEditors: isboyjc
 * @LastEditTime: 2020-03-26 17:00:04
 * @Description: 提示代码，以供用户在命令行选择
 */
module.exports = [
  {
    name: `addVersion`,
    type: "list",
    choices: [
      "*(Newest)",
      "1.67.0",
      "1.66.0",
      "1.65.0",
      "1.64.0",
      "1.63.1",
      "1.63.0",
      "1.62.0",
      "1.60.0",
      "1.59.0",
      "1.59.0-github-master2108",
      "1.58.1",
      "1.58.1-github-master2106",
      "1.57.0",
      "1.56.1",
      "1.56.0",
      "1.55.0",
      "1.54.0",
      "1.53.0",
      "1.52.0",
      "1.51.0",
      "1.50.0",
      "1.49.0",
      "1.48.0",
      "1.47.0",
      "1.46.1",
      "1.45.0",
      "1.44.0",
      "1.43.0",
      "1.42.1",
      "1.42.0",
      "1.41.0",
      "1.40.0",
      "1.39.0",
      "1.38.0",
      "1.37.0",
      "1.36.0",
      "1.35.2",
      "1.35.1",
      "1.34.0",
      "1.33.0",
      "1.32.1",
      "1.31.0",
      "1.30.0",
      "1.29.0",
      "1.28.0",
      "1.27.0",
      "1.26.0",
      "1.25.0",
      "1.24.0",
      "1.23.0",
      "1.22.2",
      "1.22.1",
      "1.22.0",
      "1.21.0",
      "1.20.0",
      "1.19.0",
      "1.18.0",
      "1.17.0",
      "1.16.0"
    ],
    message:
      "Please choose a version of 'cesium' from this list(请在列表中选择 cesium 的版本)"
  },
  {
    name: `addWidgetsToMain`,
    type: "confirm",
    message:
      "Whether to import styles globally. This operation will automatically import widgets.css in main.js(是否全局引入样式,该操作将自动在main.js引入widgets.css)？",
    default: true
  },
  {
    name: `addExample`,
    type: "confirm",
    message:
      "Whether to add sample components to the project components directory(是否添加示例组件到项目components目录)？",
    default: true
  }
]
