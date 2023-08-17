简体中文 | [English](./README.en-CN.md)

<p align="center">
<img  width="120px" height="100px"  src="https://img-blog.csdnimg.cn/99f1d53fa0b244809eee1a8a359e3261.png#pic_center" >
</p>
<h1 align="center">Fusion UI</h1>
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

- [DOCS](https://tsinghua-lau.github.io/fusion-ui/)

## 仓库目录
```bash

├─ .github                  # 模块化配置
│  ├─ workflows             # 工作流 github actions
├─ .husky                   # 提交规则 git hooks
├─ .vscode                  # vscode 配置
├─ docs                     # 组件库文档
│  ├─ .vitepress            # 文档配置
│       ├─ components       # 组件库文档组件
│       ├─ configuration    # 文档页面结构
│       ├─ dist             # 文档打包后的文件
│       ├─ plugins          # 文档插件
│       ├─ theme            # 文档主题
│       ├─ config.ts        # VitePress 配置
│  ├─ examples              # 组件库示例代码
│  ├─ langs                 # 文档多语言
│  ├─ components.d          # 文档组件类型声明
│  ├─ package.json          # package.json
│  ├─ tsconfig.json         # tsconfig 配置
├─ ├─ unocss.config.ts      # unocss 配置
│
├─ packages                 # 组件库代码
│  ├─ fusion-ui             # 组件库发布包
│     ├─ build              # 构建配置
│     ├─ components         # 组件库核心代码
│     ├─ constans           # 常量
│     ├─ styles             # 通用样式
│     ├─ utils              # 通用方法
│     ├─ package.json       # package.json
│     ├─ vite.config.ts     # vite 配置
│  ├─ playground            # 组件库演练场
├─ scripts                  # 脚本
├─ .gitignore               # git 忽略
├─ CODE_OF_CONDUCT          # 行为公约
├─ CONTRIBUTING             # 贡献指南
├─ LICENSE                  # 开源协议
├─ package.json             # package.json
├─ README.md                # 介绍
├─ tsconfig.base.json       # tsconfig 配置
├─ tsconfig.json            # tsconfig 配置
├─ vitest.config.ts         # vitest 测试配置

```

## 启动
  - 进入根目录

  ```
    pnpm i
  ```
 
  - 进入 `packages/fusion-ui` 目录
   ```
    pnpm i
  ```
  - 根目录启动组件库
  ```
    pnpm run docs:dev
  ```
  - 根目录启动组件库演练场
  ```
    pnpm run play:dev
  ```

## 特别感谢

❤️ 感谢所有为 ```FusionUI``` 做出 [贡献的人](https://github.com/tsinghua-lau/fusion-ui/graphs/contributors)！

<a href="https://github.com/tsinghua-lau/fusion-ui/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=tsinghua-lau/fusion-ui" />
</a>

## 兼容性

现代浏览器支持所有组件，只支持两到三个版本。

| [![IE / Edge](https://cdn.nlark.com/yuque/0/2023/png/785653/1676598386595-58e6efd6-bd29-4671-bf28-e289dc8911e2.png)](http://godban.github.io/browsers-support-badges/) IE / Edge | [![Firefox](https://cdn.nlark.com/yuque/0/2023/png/785653/1676598386577-a25d20a4-c8e3-4c57-86bc-a1c853264457.png)](http://godban.github.io/browsers-support-badges/) Firefox | [![Chrome](https://cdn.nlark.com/yuque/0/2023/png/785653/1676598386568-5c1d71d1-732d-41b6-a20c-9900d1bcaa7a.png)](http://godban.github.io/browsers-support-badges/) Chrome | [![Safari](https://cdn.nlark.com/yuque/0/2023/png/785653/1676598386580-1a0870a7-0483-4c92-84ee-5afcd1da92d6.png)](http://godban.github.io/browsers-support-badges/) Safari | [![Opera](https://cdn.nlark.com/yuque/0/2023/png/785653/1676598386571-49e31a0f-d0e4-4efc-8808-a5eedd4101fe.png)](http://godban.github.io/browsers-support-badges/) Opera | [![Electron](https://cdn.nlark.com/yuque/0/2023/png/785653/1676598389214-b4742a92-cfe7-4730-aefb-f2fb5fd046f3.png)](http://godban.github.io/browsers-support-badges/) Electron |
| :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| last 2 versions                                                                                                                                                                  | last 2 versions                                                                                                                                                              | last 2 versions                                                                                                                                                            | last 2 versions                                                                                                                                                            | last 2 versions                                                                                                                                                          | last 2 versions                                                                                                                                                                |

## 版本



[![release version](https://img.shields.io/npm/v/fusion-ui-vue.svg?label=FusionUi&color=blue)](https://www.npmjs.com/package/fusion-ui-vue)


您可以订阅此提要以获取新版本通知: https://github.com/tsinghua-lau/fusion-ui/releases

## 问题

如果有建议欢迎 [issue](https://github.com/tsinghua-lau/fusion-ui/issues)。

## 提交

如果你对这个项目感兴趣，欢迎加入。

- [贡献指南](https://github.com/tsinghua-lau/fusion-ui/blob/master/CONTRIBUTING.zh-CN.md)
