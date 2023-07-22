// import {request} from "@/utils";
// import {OptionsType, Api} from "@/utils";
// import {OptionsType, api as Api} from "@/utils";
// import {OptionsType, RequestClass} from "@/utils";
import {RequestClass, OptionsType} from "@/utils/index";
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
//         url: 'http://10.3.120.209:8001/heartbeat-feeling-api/wx/sns/jscode2session',
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

export const apiCommonParams = {}

export const apiList: Recordable<OptionsType> = {
  login: {url: '/wx/sns/jscode2session', method: 'POST', loginEnable: true},
  pageList: {url: '/user/pageList', method: 'POST', data: {}}
}

export const api = RequestClass.getApiList(apiList)
// console.log(123, utils.RequestClass);

// export const api = 123

// cgiBinToken.setAppid("wx208da25e78289c61");
// cgiBinToken.setSecret("5c3b4db13173472e966eb55eabc8dde6");
