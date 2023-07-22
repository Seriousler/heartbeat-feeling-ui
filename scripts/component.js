/**
 * pages页面快速生成脚本
 * 用法：npm run com `文件名`
 */

const fs = require('fs');

const dirName = process.argv[2];
const capPirName = dirName.substring(0, 1).toUpperCase() + dirName.substring(1);
if (!dirName) {
  console.log('文件夹名称不能为空！');
  console.log('示例：npm run com test');
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

fs.mkdirSync(`./src/components/${dirName}`); // mkdir $1
process.chdir(`./src/components/${dirName}`); // cd $1

fs.writeFileSync(`index.tsx`, indexTep); //tsx
fs.writeFileSync(`index.scss`, scssTep); // scss
fs.writeFileSync(`type.ts`, typeTep); // interface
