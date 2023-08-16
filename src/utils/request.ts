import Taro from '@tarojs/taro';
import { isBoolean, isNumber, isObject, isString } from 'lodash';
// import {MAIN_HOST, MAIN_PREFIX} from "@/config";
// import {interceptors} from './interceptors';

export interface Option <U extends string | TaroGeneral.IAnyObject | ArrayBuffer = any > {
  /** 开发者服务器接口地址 */
  url: string
  /** 请求的参数 */
  data?: U
  /** 设置请求的 header，header 中不能设置 Referer。
   *
   * `content-type` 默认为 `application/json`
   */
  header?: TaroGeneral.IAnyObject
  /** 超时时间，单位为毫秒
   * @default 2000
   * @supported weapp, h5, tt
   */
  timeout?: number
  /** HTTP 请求方法
   * @default GET
   */
  method?: string
  /** 返回的数据格式 */
  dataType?: keyof string
  /** 响应的数据类型 */
  responseType?: keyof ResponseType
  /** 开启 http2
   * @default false
   * @supported weapp
   */
  enableHttp2?: boolean
  /** 开启 quic
   * @default false
   * @supported weapp
   */
  enableQuic?: boolean
  /** 开启 cache
   * @default false
   * @supported weapp, tt
   */
  enableCache?: boolean
  /** 是否开启 HttpDNS 服务。如开启，需要同时填入 httpDNSServiceId 。 HttpDNS 用法详见 移动解析HttpDNS
   * @default false
   * @supported weapp
   */
  enableHttpDNS?: boolean
  /** HttpDNS 服务商 Id。 HttpDNS 用法详见 移动解析HttpDNS
   * @supported weapp
   */
  httpDNSServiceId?: string
  /** 开启 transfer-encoding chunked。
   * @default false
   * @supported weapp
   */
  enableChunked?: boolean
  /** 接口调用成功的回调函数 */
  success?: (result: Recordable<ArrayBuffer>) => void
  /** 接口调用失败的回调函数 */
  fail?: (res: TaroGeneral.CallbackResult) => void
  /** 接口调用结束的回调函数（调用成功、失败都会执行） */
  complete?: (res: TaroGeneral.CallbackResult) => void
  /** 设置是否使用 jsonp 方式获取数据
   * @default false
   * @supported h5
   */
  jsonp?: boolean | string
  /** 设置 jsonp 请求 url 是否需要被缓存
   * @supported h5
   */
  jsonpCache?: RequestCache
  /** 设置是否允许跨域请求
   * @default "same-origin"
   * @supported h5
   */
  mode?: string
  /** 设置是否携带 Cookie
   * @default "omit"
   * @supported h5
   */
  credentials?: string
  /** 设置缓存模式
   * @default "default"
   * @supported h5
   */
  cache?: keyof Cache
  /** 设置请求重试次数
   * @default 2
   * @supported h5
   */
  retryTimes?: number
  /** 设置请求的兜底接口
   * @supported h5
   */
  backup?: string | string[]
  /** 设置请求中止信号
   * @supported h5
   */
  signal?: AbortSignal
  /** 设置请求响应的数据校验函数，若返回 false，则请求兜底接口，若无兜底接口，则报请求失败
   * @supported h5
   */
  dataCheck?(): boolean
  /** 设置请求是否使用缓存
   * @default false
   * @supported h5
   */
  useStore?: boolean
  /** 设置请求缓存校验的 key
   * @supported h5
   */
  storeCheckKey?: string
  /** 设置请求缓存签名
   * @supported h5
   */
  storeSign?: string
  /** 设置请求校验函数，一般不需要设置
   * @supported h5
   */
  storeCheck?(): boolean
  /** 是否调用登录接口
   */
  loginEnable?: boolean
}

// interface SuccessCallbackResult < T extends string | TaroGeneral.IAnyObject | ArrayBuffer = any | any > extends TaroGeneral.CallbackResult {
//   /** 开发者服务器返回的数据 */
//   data: T
//   /** 开发者服务器返回的 HTTP Response Header */
//   header: TaroGeneral.IAnyObject
//   /** 开发者服务器返回的 HTTP 状态码 */
//   statusCode: number
//   /** 调用结果 */
//   errMsg: string
//   /** cookies */
//   cookies?: string[]
// }

// /** 返回的数据格式 */
// interface DataType {
//   /** 返回的数据为 JSON，返回后会对返回的数据进行一次 JSON.parse
//    * 其他: 不对返回的内容进行 JSON.parse
//    */
//   json
// }

// /** HTTP 请求方法 */
// interface Method {
//   /** HTTP 请求 OPTIONS */
//   OPTIONS
//   /** HTTP 请求 GET */
//   GET
//   /** HTTP 请求 HEAD */
//   HEAD
//   /** HTTP 请求 POST */
//   POST
//   /** HTTP 请求 PUT */
//   PUT
//   /** HTTP 请求 PATCH */
//   PATCH
//   /** HTTP 请求 DELETE */
//   DELETE
//   /** HTTP 请求 TRACE */
//   TRACE
//   /** HTTP 请求 CONNECT */
//   CONNECT
// }

// /** 响应的数据类型 */
// interface ResponseType {
//   /** 响应的数据为文本 */
//   text
//   /** 响应的数据为 ArrayBuffer */
//   arraybuffer
// }

// /** 跨域策略 */
// interface CorsMode {
//   /** 跨域请求将获取不透明的响应 */
//   'no-cors'
//   /** 允许跨域请求 */
//   cors
//   /** 请求总是向当前的源发起的 */
//   'same-origin'
// }
// /** 证书 */
// interface Credentials {
//   /** 不论是不是跨域的请求,总是发送请求资源域在本地的 cookies、 HTTP Basic authentication 等验证信息 */
//   include
//   /** 只有当URL与响应脚本同源才发送 cookies、 HTTP Basic authentication 等验证信息 */
//   'same-origin'
//   /** 从不发送cookies */
//   omit
// }
// /** 缓存策略 */
// interface Cache {
//   /** 浏览器从HTTP缓存中寻找匹配的请求 */
//   default
//   /** 浏览器在其HTTP缓存中寻找匹配的请求 */
//   'no-cache'
//   /** 浏览器直接从远程服务器获取资源，不查看缓存，然后使用下载的资源更新缓存 */
//   reload
//   /** 浏览器在其HTTP缓存中寻找匹配的请求 */
//   'force-cache'
//   /** 浏览器在其HTTP缓存中寻找匹配的请求 */
//   'only-if-cached'
// }
// // type Methods = "GET" | "OPTIONS" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT";
// // type Headers = { [key: string]: string };
// // type Datas = { [key: string]: any; };
// // export interface OptionsType {
// //   url: string;
// //   host?: string;
// //   method?: Methods;
// //   data?: Datas;
// //   header?: Headers;
// //   timeout?: number
// //   dataType?: string
// //   ResponseType?: string
// //   loginEnable?: boolean // 是否调用登录
// // }

// // interceptors.forEach((interceptorItem) => Taro.addInterceptor(interceptorItem));

// // 输出日志信息
// // const noConsole = false

export type Api = Recordable<(...arg: any[]) => Promise<any>>
// type Api = Recordable<Partial<Option>>
// 请求实例
export class Request {
  static isLogin: boolean = false
  static apiList: Api = {}
  static commonData: Recordable = {}

  // 微信登录
  static async login(url, data): Promise<void> {
    this.isLogin = true
    const { code } = await Taro.login()
    return Taro.request({
      url,
      data: { js_code: code, ...data },
      method: 'POST'
    })
  }

  // 创建请求配置
  static createOptions (opt: Partial<Option>, data: Recordable) {
    const {url, header, method, timeout, dataType, responseType} = opt
    return {
      url,
      data: {...this.commonData, ...data},
      header: (isObject(header) && header) ? header : {'content-type': 'application/json'},
      method: (isString(method) && method) ? method : 'GET',
      timeout: (isNumber(timeout) && timeout) ? timeout : 2000,
      dataType: (isString(dataType) && dataType) ? dataType : 'json',
      responseType: (isString(responseType) && responseType) ? responseType : 'text'
    }
  }

  // 创建请求
  static createRequest (opt: Partial<Option> & {loginEnable?: boolean}): (...arg: any[]) => Promise<any> {
    const {loginEnable, url} = opt
    if (isBoolean(loginEnable) && loginEnable) {
      return (data) => this.login(url, data)
    } else {
      return (data) => Taro.request(this.createOptions(opt, data))
    }
  }

  // // 创建请求
  // static async request<T extends Option> (opt: T): Promise<void> {
  //   const {data} = Taro.request(opt)
  // }

  // api列表
  static getApiList<T extends Recordable<Partial<Option>>>(commonData: T, list: T): Api {
    if (!Object.keys(list).length) return {}
    this.commonData = commonData
    Object.keys(list).forEach((key: string) => {
      this.apiList[key] = this.createRequest(list[key])
    })
    return this.apiList
  }
}
