import { useGlobalIconFont } from '@/components/Iconfont/helper';

export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/dynamic/index',
    'pages/member/index',
    'pages/message/index',
    'pages/mine/index'],
  usingComponents: Object.assign(useGlobalIconFont()),
  window: {
    navigationBarBackgroundColor: '#0f141a',
    navigationBarTextStyle: 'white',
    navigationBarTitleText: '微信接口功能演示',
    backgroundColor: '#eeeeee',
    backgroundTextStyle: 'light',
    navigationStyle: 'custom',
    enablePullDownRefresh: true // 开启下拉功能
  },
  tabBar:{
    "backgroundColor": "#0f141a",
    "borderStyle": "white",
    "color": "#fff",
    "selectedColor": "#fff",
    "position": 'top',
    "custom": true,
    "list": [
      // {
      //   "pagePath": "pages/index/index",
      //   "text": ""
      //   // "iconPath": 'assets/images/bottomNav/discover.png',
      //   // "selectedIconPath": "assets/images/bottomNav/discover_active.png"
      // },
      {
        "pagePath": "pages/dynamic/index",
        "text": "动态"
      },
      {
        "pagePath": "pages/member/index",
        "text": "会员"
      },
      {
        "pagePath": "pages/message/index",
        "text": "消息"
      },
      {
        "pagePath": "pages/mine/index",
        "text": "我的"
      }
    ]
  }
})
