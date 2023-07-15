import { useGlobalIconFont } from '@/components/Iconfont/helper';

export default defineAppConfig({
  pages: ['pages/index/index', 'pages/recommend/index', 'pages/specialArea/index'],
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
        "pagePath": "pages/recommend/index",
        "text": "推荐"
        // "iconPath": 'assets/images/bottomNav/discover.png',
        // "selectedIconPath": "assets/images/bottomNav/discover_active.png"
      },
      {
        "pagePath": "pages/specialArea/index",
        "text": "专区"
        // "iconPath": 'assets/images/bottomNav/discover.png',
        // "selectedIconPath": "assets/images/bottomNav/discover_active.png"
      }
    ]
  }
})
