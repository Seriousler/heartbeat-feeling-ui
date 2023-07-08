// import {request} from "@/utils";
import Taro from "@tarojs/taro";

// type TaroLogin = (option?: Option) => Promise<SuccessCallbackResult>
export const getUser = () => Taro.request({
  url: 'http://10.3.120.200:8001/heartbeat-feeling-api/user/pageList',
  data: {},
  method: 'POST'
})

export const getLogin = () => Taro.login({
  success: function (res) {
    console.log('Taro.login--------------', res)
    if (res.code) {
      //发起网络请求
      Taro.request({
        url: 'http://10.3.120.200:8001/heartbeat-feeling-api/wx/sns/jscode2session',
        data: {
          'js_code': res.code
        },
        method: 'POST'
      })
    } else {
      console.log('登录失败！' + res.errMsg)
    }
  }
})

// cgiBinToken.setAppid("wx208da25e78289c61");
// cgiBinToken.setSecret("5c3b4db13173472e966eb55eabc8dde6");
