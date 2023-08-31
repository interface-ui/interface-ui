<p align="center">
<img  width="120px" height="100px"  src="https://img-blog.csdnimg.cn/99f1d53fa0b244809eee1a8a359e3261.png#pic_center" >
</p>
<h1 align="center">Fusion Ui</h1>
<p align="center">Fusion Ui /ˈfjuːʒ(ə)n/ 是一个 Vue3 组件库，简洁、优雅、美观</p>
</p>

## 简介

由于它刚起步，还在慢慢完善中，因此不建议用于``生产``环境中

如果想学习Vue3+Ts+Vite组件库的搭建，那么它会是一个不错的选择

## 特性

- 🧜 组件设计-提供整洁和美丽的精心制作的 UI 组件。
- 🎡 按需引入-提供解析器以自动导入仅使用过的组件。
- 💪 支持 TypeScript-支持类型脚本和类型检查及类型推断。
- 🧪 Vitest 单元测试
- ⚡️ 全面基于 Vite，速度够快
- 📃 详细的中/英文档
- 🛠  More...

## 安装

```
# pnpm
$ pnpm add fusion-ui-vue

# npm
$ npm install fusion-ui-vue

# yarn
$ yarn add fusion-ui-vue

```

## 使用

```
import { createApp } from 'vue'
import fusionUi from 'fusion-ui-vue'
import 'fusion-ui-vue/dist/styles/index.css'
import App from './App.vue'

const app = createApp(App)
app.use(fusionUi).mount('#app')

```

## 配套文档

- 👋 [DOCS](https://tsinghua-lau.github.io/fusion-ui/)


## 特别感谢

❤️ 感谢所有为 ```FusionUi``` 做出 [贡献的人](https://github.com/tsinghua-lau/fusion-ui/graphs/contributors)！

<a href="https://github.com/tsinghua-lau/fusion-ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tsinghua-lau/fusion-ui" />
</a>

## 版本



[![release version](https://img.shields.io/npm/v/fusion-ui-vue.svg?label=FusionUi&color=blue)](https://www.npmjs.com/package/fusion-ui-vue)


您可以订阅此提要以获取新版本通知: https://github.com/tsinghua-lau/fusion-ui/releases

## 问题

如果有建议欢迎 [issue](https://github.com/tsinghua-lau/fusion-ui/issues)。

## 参与

如果你对这个项目感兴趣，欢迎加入。

🍺 [贡献指南](https://github.com/tsinghua-lau/fusion-ui/blob/master/CONTRIBUTING.zh-CN.md)
