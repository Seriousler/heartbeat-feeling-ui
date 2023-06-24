# HeartbeatFeeling

- [Taro 官方文档](https://taro-docs.jd.com/taro/docs/README)
- [Taro Hooks](https://github.com/innocces/taro-hooks)



# 环境

node: v18.14.2

pnpm: 8.6.3

webpack: 5.x



# 如何使用

1.安装基础依赖

```shell
pnpm install
# or npm install
```

2.运行项目

```
npm run dev:weapp
```

3.使用`微信开发工具`导入`dist`目录



# 项目结构目录

```sh
├── dist                        编译结果目录
|
├── config                      项目编译配置目录
|   ├── index.js                默认配置
|   ├── dev.js                  开发环境配置
|   └── prod.js                 生产环境配置
|
├── src                         源码目录
│  	├─api 						请求列表
│  	├─assets 					静态资源
|   ├── pages                   页面文件目录
|   |   └── index               index 页面目录
|   |       ├── index.tsx       index 页面逻辑
|   |       ├── index.sass      index 页面样式
|   |       ├── index.config.ts index 页面配置
|   |       ├── model.ts       	index 页面数据仓库
|   |       └── types.ts 		index 页面类型
│  	├── store 					store集成dva
│  	│  	└──	index.ts 			数据仓库统一出口
│  	├── styles 					样式集成sass
│  	│  	└── index.sass 			样式统一出口
│  	└── utils 					工具
│  	│   └── index.ts 			工具统一出口
|   ├── app.tsx                 项目入口文件
|   ├── app.sass                项目总通用样式
|   └── app.config.ts           项目入口配置
│
├── types 						全局类型
├── project.config.json         微信小程序项目配置
├── project.tt.json             抖音小程序项目配置
├── project.swan.json           百度小程序项目配置
├── project.qq.json             QQ 小程序项目配置
├── babel.config.js             Babel 配置
├── tsconfig.json               TypeScript 配置
├── .eslintrc                   ESLint 配置
├── .editorconfig               ESLint 忽略配置
├── .cz-config.js               commitizen提交规范
├── .gitignore
├── .npmrc
└── package.json
```



# git提交规范

| 值       | 描述                                                         |
| -------- | ------------------------------------------------------------ |
| feat     | 新增一个功能                                                 |
| fix      | 修复一个Bug                                                  |
| docs     | 文档变更                                                     |
| style    | 代码格式（不影响功能，例如空格、分号等格式修正）             |
| refactor | 代码重构                                                     |
| perf     | 改善性能                                                     |
| test     | 测试                                                         |
| build    | 变更项目构建或外部依赖（例如scopes: webpack、gulp、npm等）   |
| ci       | 更改持续集成软件的配置文件和package中的scripts命令，例如scopes: Travis, Circle等 |
| chore    | 变更构建流程或辅助工具                                       |
| revert   | 代码回退                                                     |
| WIP      | 在制品,进行中的工作                                          |



# 开发规范

## 组件结构

组件分为5个部分组成,尽量保持页面逻辑不受到其他类型代码的污染.

```sh
├── index.tsx       			index 页面逻辑
├── index.sass      			index 页面样式
├── index.config.ts 		    index 页面配置
├── model.ts       			    index 页面数据仓库
└── types.ts 					index 页面类型
```



## 插件、工具

工具集、插件等,封装时的模块化请保持统一出口,方便后期维护

```sh
│  	├── store 					store集成dva
│  	│  	└──	index.ts 			数据仓库统一出口
└──	└── utils 					工具集
   	    └── index.ts 			工具统一出口
```

