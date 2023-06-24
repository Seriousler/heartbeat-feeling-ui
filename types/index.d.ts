/// <reference types="@tarojs/taro" />
/// <reference path="./taro-components.d.ts" />

declare module '*.png';
declare module '*.gif';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.svg';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.styl';

declare namespace NodeJS {
  interface ProcessEnv {
    TARO_ENV: 'weapp' | 'swan' | 'alipay' | 'h5' | 'rn' | 'tt' | 'quickapp' | 'qq' | 'jd'
  }
}

declare module 'react/jsx-runtime' {
	export const jsx: typeof React.createElement;
  export const jsxs: typeof React.createElement;
  export const Fragment: typeof React.Fragment;
}

declare module '@tarojs/redux'
declare module '@tarojs/taro'
// {
//   // interface Taro {
//   //   // 这里定义 Taro 对象的类型
//   //   showToast(options: Taro.showToast.Option): void;
//   //   useLaunch(): any
//   // }
//   const Taro: any;
//   export default Taro;
// }

// declare module '@tarojs/components' 
// {
// 这里定义 @tarojs/components 组件库的类型
//   export const View: any;
//   export const Text: any;
// }

// declare module 'react' {
//   // 这里定义 React 相关的类型
//   interface ReactNode {}
//   interface ReactElement {}
//   interface Component {}
// }

// declare module 'react-dom' {
//   // 这里定义 ReactDOM 相关的类型
//   function render(element: React.ReactElement, container: Element | null): void;
// }

