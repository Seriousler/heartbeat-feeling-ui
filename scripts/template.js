/**
 * pages页面快速生成脚本
 * 用法：npm run tep `文件名`
 */
const fs = require('fs');

const dirName = process.argv[2];
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1);
if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run tep test');
  process.exit(0);
}

// 页面模板
const indexTep = `
import { FC } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { ${capPirName}Props, ${capPirName}State } from './type.ts'
import './index.scss'

// @connect(({ ${dirName} }) => ({
//     ...${dirName}
// }))

const ${capPirName}: FC = (props: ${capPirName}Props) => {
  return (
    <View className='${dirName}-wrap'>${capPirName}</View>
  )
}

export default ${capPirName}
`

// scss文件模版
const scssTep = `
.${dirName}-wrap {
    width: 100%;
    min-height: 100vh;
}
`

// config 配置模板
const configTep = `
export default definePageConfig({
  navigationBarTitleText: '${capPirName}'
})
`

// api 模板
const serviceTep = `
import Api from '../../utils/request'

export const testApi = data => Api.test(
  data
)
`

// storeModel 模板
const modelTep = `
import type { request } from '@/utils';
import type { Model } from '@/store';
import type { ${capPirName}Model } from './types'

export const indexModel: Model<${capPirName}Model> = {
  namespace: '${capPirName}',
  state: {},
  effects: {},
  reducers: {}
};
`

// type 模版
const typeTep = `
/**
 * ${dirName}.props 参数类型
 *
 * @export
 * @interface ${capPirName}Props
 */
export interface ${capPirName}Props {}

/**
 * ${dirName}.Model 参数类型
 *
 * @export
 * @interface ${capPirName}Model
 */
export interface ${capPirName}Model {}
`

fs.mkdirSync(`./src/pages/${dirName}`); // mkdir $1
process.chdir(`./src/pages/${dirName}`); // cd $1

fs.writeFileSync(`index.tsx`, indexTep); //tsx
fs.writeFileSync(`index.scss`, scssTep); // scss
fs.writeFileSync('index.config.ts', configTep); // config
fs.writeFileSync('service.ts', serviceTep); // service
fs.writeFileSync('model.ts', modelTep); // model
fs.writeFileSync(`type.ts`, typeTep); // interface
process.exit(0);
