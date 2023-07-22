import Taro from '@tarojs/taro';
import {MAIN_HOST, MAIN_PREFIX} from "@/config";
import {apiCommonParams, apiList} from "@/api";
import { isBoolean, isNumber, isObject, isString } from 'lodash';
// import {interceptors} from './interceptors';

type Methods = "GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT";
type Headers = { [key: string]: string };
type Datas = { [key: string]: any; };
export interface OptionsType {
  url: string;
  host?: string;
  method?: Methods;
  data?: Datas;
  header?: Headers;
  timeout?: number
  dataType?: string
  ResponseType?: string
  loginEnable?: boolean // 是否调用登录
}

// interceptors.forEach((interceptorItem) => Taro.addInterceptor(interceptorItem));

// 输出日志信息
// const noConsole = false
export class RequestClass {
  static isLogin: boolean = false
  static apiList: Recordable<OptionsType> | {} = {}

  // 微信登录
  static async login(): Promise<void> {
    this.isLogin = true
    return new Promise(async (resolve: (arg?: any) => void, reject): Promise<void> => {
      // 获取code
      const { code } = await Taro.login()

      // 登录
      const { data } = await Taro.request({
        url: `${MAIN_HOST}${MAIN_PREFIX}${apiList.login}`,
        data: { js_code: code }
      })

      if (data.code !== 0 || !data.data || !data.data.token) {
        reject()
        return
      }

      Taro.setStorageSync('token', data.data.token)
      this.isLogin = false
      resolve()
    })
  }

  // 创建请求配置
  static createOptions (opt: OptionsType) {
    const {url, host, data, header, method, timeout, dataType, ResponseType} = opt
    return {
      url: `${host ?? MAIN_HOST}${MAIN_PREFIX}${url}`,
      data: {...apiCommonParams, ...data},
      header: (isObject(header) && header) ? header : {'content-type': 'application/json'},
      method: (isString(method) && method) ? method : 'GET',
      timeout: isNumber(timeout) ? timeout : 2000,
      dataType: (isString(dataType) && dataType) ? dataType : 'json',
      ResponseType: (isString(ResponseType) && ResponseType) ? ResponseType : 'text'
    }
  }

  // 创建请求
  static createRequest (opt: OptionsType) {
    const {loginEnable} = opt
    if (isBoolean(loginEnable) && loginEnable) {
      // this.login()
    } else {
      // return new Promise(() => Taro.request(this.createOptions(opt)))
      return 123
    }
    return 123
  }

  // // 创建请求
  // static async request<T extends OptionsType> (opt: T): Promise<void> {
  //   const {data} = Taro.request(opt)
  // }

  // api列表
  static getApiList<T extends Recordable<OptionsType>> (list: T): T {
    if (!Object.keys(list).length) return {} as T
    // Object.keys(list).forEach((key: string) => {
    //   // this.apiList[key] = this.createRequest(list[key])
    //   this.apiList[key] = 123
    // })
    return {} as T
  }
}
// console.log(222, RequestClass.getApiList(apiList));
// console.log(222, RequestClass.getApiList(apiList));


// export const requestApi = RequestClass.getApiList(apiList)
// export const request = <T>(
//   options: OptionsType = { method: 'POST', data: {}, url: '', noLoading: false }
// ): Promise<T> => {
//   if (!options.noLoading) {
//     Taro.showLoading({
//       title: '加载中'
//     });
//   }
//   if (!noConsole) {
//     console.log(`${new Date().toLocaleString()}【 URL=${options.url} 】PARAM=${JSON.stringify(options.data)}`);
//   }
//   for (const key in options.data) {
//     if (options.data.hasOwnProperty(key) && (options.data[key] === undefined || options.data[key] == null)) {
//       delete options.data[key];
//     }
//   }
//   return Taro.request({
//     url: options.url,
//     // data: {
//     //   ...options.data
//     // },
//     header: {
//       'X-Token': Taro.getStorageSync('token'),
//       'Content-Type': 'application/json'
//     },
//     method: options.method.toUpperCase()
//   }).then((res) => {
//     setTimeout(() => {
//       Taro.hideLoading();
//     }, 100);
//     if (!noConsole) {
//       console.log(`${new Date().toLocaleString('zh', { hour12: false })}【${options.url} 】【返回】`, res.data);
//     }
//   });
// };
