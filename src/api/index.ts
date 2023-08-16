// import {request} from "@/utils";
// import {OptionsType, Api} from "@/utils";
// import {OptionsType, api as Api} from "@/utils";
// import {OptionsType, RequestClass} from "@/utils";
import { MAIN_HOST, MAIN_PREFIX } from "@/config";
import {Request, Option, Api} from "@/utils";
// import Taro from "@tarojs/taro";

// type TaroLogin = (option?: Option) => Promise<SuccessCallbackResult>
// export const getUser = () => Taro.request({
//   url: 'http://10.3.120.209:8001/heartbeat-feeling-api/user/pageList',
//   data: {},
//   method: 'POST'
// })

// export const getLogin = () => Taro.login({
//   success: function (res) {
//     console.log('Taro.login--------------', res)
//     if (res.code) {
//       //发起网络请求
//       Taro.request({
//         url: 'http://127.0.0.1:8001/heartbeat-feeling-api/wx/sns/jscode2session',
//         data: {
//           'js_code': res.code
//         },
//         method: 'POST'
//       })
//     } else {
//       console.log('登录失败！' + res.errMsg)
//     }
//   }
// })

// 请求域名+服务前缀
export const baseUrl = `${MAIN_HOST}${MAIN_PREFIX}`

// 请求公共参数
export const apiCommonData = {}

// 请求配置列表
export const apiList: Recordable<Partial<Option>> = {
  login: {url: `${baseUrl}/wx/sns/jscode2session`, method: 'POST', loginEnable: true},
  pageList: {url: `${baseUrl}/user/pageList`, method: 'POST'},
  userSave: {url: `${baseUrl}/user/save`, method: 'POST'},
  userInterestSave: {url: `${baseUrl}/user/interest/save`, method: 'POST'},
  userDetail: {url: `${baseUrl}/user/detail`, method: 'POST'},
  userDelete: {url: `${baseUrl}/user/delete`, method: 'POST'},
  interestList: {url: `${baseUrl}/interest/list`, method: 'POST'},
  loveStandardList: {url: `${baseUrl}/love/standard/list`, method: 'POST'},
}

// 请求方法列表
export const api: Api = Request.getApiList(apiCommonData, apiList)

// cgiBinToken.setAppid("wx208da25e78289c61");
// cgiBinToken.setSecret("5c3b4db13173472e966eb55eabc8dde6");
