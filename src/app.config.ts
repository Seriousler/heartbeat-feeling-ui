import { useGlobalIconFont } from '@/components/Iconfont/helper';

export default defineAppConfig({
  // pages: ['pages/index/index'],
  pages: [
    'pages/index/index',
    'pages/dynamic/index',
    'pages/member/index',
    'pages/message/index',
    'pages/mine/index'],
  // eslint-disable-next-line react-hooks/rules-of-hooks
  usingComponents: Object.assign(useGlobalIconFont()),
  sitemapLocation: "sitemap.json",
  lazyCodeLoading: 'requiredComponents', // 按需加载
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
    "position": 'bottom',
    "custom": true,
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "首页"
        // "iconPath": 'assets/images/bottomNav/discover.png',
        // "selectedIconPath": "assets/images/bottomNav/discover_active.png"
      },
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
  },
  //  分包路径
  // subPackages:[
  //   {
  //     "root": "pages/dynamic/",
  //     "pages": [
  //       "index"
  //     ]
  //   }, {
  //     "root": "pages/member/",
  //     "pages": [
  //       "index"
  //     ]
  //   }, {
  //     "root": "pages/message/",
  //     "pages": [
  //       "index"
  //     ]
  //   }, {
  //     "root": "pages/mine/",
  //     "pages": [
  //       "index"
  //     ]
  //   }
  // ]
})
