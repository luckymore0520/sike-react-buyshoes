// App 组件
const React = require("react");
const MyApp = require("./components/app")


window.onload = () => {
  // 使用 App 组件替换 `#root` 的 innerHTML。
  React.render(<MyApp/>,document.querySelector("#root"));
}
