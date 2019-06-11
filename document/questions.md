## 1. 使用react-app-rewired设置alias
不仅需要在config-oerrides中配置，oerrides中配置，tsjson也需要配置，且tsconfig也需要配置，且tsconfig配置每个对象的最后一项的','一定不能加。
start为什么会删除tsconfig中的paths
### 最后eject
> 添加```tsconfig-paths-webpack-plugin```插件

## 2. 组件组合
高阶组件，但事件分发很僵硬。

## 3. 切换展示信息，图片闪烁(todo)
因为DOM节点的删除添加导致重排，解决方法：固定展示的DOM节点，通过改变src改变图片。
