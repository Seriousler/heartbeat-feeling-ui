import Taro from '@tarojs/taro';
import {interceptors} from './interceptors';

export interface OptionsType {
  method: 'GET' | 'POST' | 'PUT';
  data?: any;
  url: string;
  noLoading?: boolean;
}

interceptors.forEach((interceptorItem) => Taro.addInterceptor(interceptorItem));

// 输出日志信息
const noConsole = false

export const request = (
  options: OptionsType = { method: 'POST', data: {}, url: '', noLoading: false }
) => {
  if (!options.noLoading) {
    Taro.showLoading({
      title: '加载中'
    });
  }
  if (!noConsole) {
    console.log(`${new Date().toLocaleString()}【 URL=${options.url} 】PARAM=${JSON.stringify(options.data)}`);
  }
  for (const key in options.data) {
    if (options.data.hasOwnProperty(key) && (options.data[key] === undefined || options.data[key] == null)) {
      delete options.data[key];
    }
  }
  return Taro.request({
    url: options.url,
    // data: {
    //   ...options.data
    // },
    header: {
      'X-Token': Taro.getStorageSync('token'),
      'Content-Type': 'application/json'
    },
    method: options.method.toUpperCase()
  }).then((res) => {
    setTimeout(() => {
      Taro.hideLoading();
    }, 100);
    if (!noConsole) {
      console.log(`${new Date().toLocaleString('zh', { hour12: false })}【${options.url} 】【返回】`, res.data);
    }
  });
};
