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



#  taro-iconfont-cli

在Taro框架中使用iconfont图标，不依赖字体，支持多色彩。

## 支持平台

- 微信小程序
- 支付宝小程序
- 百度小程序
- 头条小程序
- QQ小程序
- H5

## 特性

1、一键生成标准组件，多端支持
2、使用方便，import即可
3、支持多色彩
4、支持自定义颜色
5、支持es6和typescript两种模式

## Step 1

安装插件

**如果您使用Taro2.x，请安装 `taro-iconfont-cli@2.1.0`，并阅读旧版的[README.md](https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Ficonfont-cli%2Ftaro-iconfont-cli%2Fblob%2Fv2.1.0%2FREADME.md)**

```
# Yarn
yarn add taro-iconfont-cli --dev

# Npm
npm install taro-iconfont-cli --save-dev
```

## Step 2

生成配置文件

```
npx iconfont-init

# 可传入配置输出路径
# npx iconfont-init --output iconfont.json
```

此时项目根目录会生成一个`iconfont.json`的文件，内容如下：

```
{
  "symbol_url": "请参考README.md，复制 http://iconfont.cn 官网提供的JS链接",
  "save_dir": "./src/components/iconfont",
  "use_typescript": false,
  "platforms": "*",
  "use_rpx": true,
  "trim_icon_prefix": "icon",
  "default_icon_size": 18,
  "design_width": 750
}
```

### 配置参数说明：

#### symbol_url

请直接复制[iconfont](https://gitee.com/link?target=http%3A%2F%2Ficonfont.cn)官网提供的项目链接。请务必看清是`.js`后缀而不是.css后缀。如果你现在还没有创建iconfont的仓库，那么可以填入这个链接去测试：`http://at.alicdn.com/t/font_1373348_kk9y3jk2omq.js`



![img](https://github.com/fwh1990/mini-program-iconfont-cli/blob/master/images/symbol-url.png?raw=true)

#### save_dir

根据iconfont图标生成的组件存放的位置。每次生成组件之前，该文件夹都会被清空。

#### use_typescript

如果您的项目使用Typescript编写，请设置为true。这个选项将决定生成的图标组件是`.tsx`还是`.js`后缀。

当该值为false时，我们会为您的图标生成`.js`和`.d.ts`两个文件，以便您能享受到最好的开发体验。

#### platforms

选择需要支持的平台，默认是`*`，意味着所有平台都需要支持（如果有）。如果你只想支持部分平台，也可以设置成数组：

```
{
  // 选择你需要的平台
  // 说明 =>  weapp: 微信  |  swan: 百度  |  alipay: 支付宝  |  tt: 字节跳动
  "platforms": ["weapp", "swan", "alipay", "h5", "tt", "qq"]
}
```

#### use_rpx

是否使用[尺寸单位rpx](https://gitee.com/link?target=https%3A%2F%2Fdevelopers.weixin.qq.com%2Fminiprogram%2Fdev%2Fframework%2Fview%2Fwxss.html%23%E5%B0%BA%E5%AF%B8%E5%8D%95%E4%BD%8D)还是普通的像素单位`px`。默认值为true，与Taro保持一致的缩放。您也可以设置为false，强制使用`px`

#### design_width

若 `use_rpx: true` 且当前设计图尺寸不为 750 时，可以通过修改这个字段来修改设计尺寸。

#### trim_icon_prefix

如果你的图标有通用的前缀，而你在使用的时候又不想重复去写，那么可以通过这种配置这个选项把前缀统一去掉。

#### default_icon_size

我们将为每个生成的图标组件加入默认的字体大小，当然，你也可以通过传入props的方式改变这个size值。

## Step 3

开始生成Taro标准组件

```
npx iconfont-taro

# 可传入配置文件路径
# npx iconfont-taro --config iconfont.json
```

生成后查看您设置的保存目录中是否含有所有的图标

------

在生成代码之前，你可以顺便参考[snapshots目录](https://gitee.com/link?target=https%3A%2F%2Fgithub.com%2Ficonfont-cli%2Ftaro-iconfont-cli%2Ftree%2Fmaster%2Fsnapshots)自动生成的快照文件。

## Step 4

由于Taro3.0的架构变更，您需要在`src/app.config.js`下填写一次`usingComponents`。

```
// src/app.config.js
import { useGlobalIconFont } from './components/iconfont/helper';

export default {
  usingComponents: Object.assign(useGlobalIconFont()),
}
```

这并不是一个多好的方案，毕竟还需要开发者关注这个细节。也许能用webpack的plugin解决或者等官方推出更好的方案，有任何更好的idea欢迎提供。

## 使用

在Page中使用图标

```
import React, { Component } from 'react';
import IconFont from '../components/iconfont';

class App extends Component {
  render() {
    return <IconFont name="alipay" />;
  }
}

export default App;
```

更多用法：

```
// 原色彩
<IconFont name="alipay" />

// 单色：红色
<IconFont name="alipay" color="red" />

// 多色：红色+橘色
<IconFont name="alipay" color={['red', 'orange']} size={300} />

// 不同格式的颜色写法
<IconFont name="alipay" color={['#333', 'rgb(50, 124, 39)']} />


// 与文字对齐
<View style={{ display: 'flex', alignItems: 'center' }}>
  <Text>Hello</text>
  <IconFont name="alipay" />
</View>
```

## 更新图标

当您在iconfont.cn中的图标有变更时，只需更改配置`symbol_url`，然后再次执行`Step 3`即可生成最新的图标组件

```
# 修改 symbol_url 配置后执行：
npx iconfont-taro
```
