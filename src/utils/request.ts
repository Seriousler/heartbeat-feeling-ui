import Taro from '@tarojs/taro';
import {MAIN_HOST, MAIN_PREFIX} from "@/config";
import {apiList} from "@/api";
import {interceptors} from './interceptors';

declare type Methods = "GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT";
declare type Headers = { [key: string]: string };
declare type Datas = { method: Methods;[key: string]: any; };

export interface Options {
  url: string;
  host?: string;
  method?: Methods;
  data?: Datas;
  header?: Headers;
}

interceptors.forEach((interceptorItem) => Taro.addInterceptor(interceptorItem));

// 输出日志信息
// const noConsole = false

class Request {
  static isLogin: boolean = false
  static apiList: Recordable<>
  static async login(): Promise<void> {
    this.isLogin = true
    return new Promise(async (resolve: (arg?: any) => void, reject): Promise<void> => {
      // 获取code
      const { code } = await Taro.login()

      // 请求登录
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
  static createdOption () {

  }
  // 创建请求
  static async request<T extends Options> (opt: T): Promise<void> {
    const {data} = Taro.request(opt)
  }

  static getApiList<T extends Recordable<Options>> (list: T): T {
    !Object.keys(list).length return {}
    return this.apiList
  }
}
const request = new Request()
const Api = request.getApiList(apiList)
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
