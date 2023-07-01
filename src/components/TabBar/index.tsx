import { useState } from 'react';
import { AtTabBar } from 'taro-ui';
import './index.scss';

export default function NavBar(props) {
  const [current, setCurrent] = useState(0)
  console.log('NavBar=====>', props);
  const clickHandle = (e) => {
    console.log('e========>', e);
    setCurrent(e)
  }
  return <AtTabBar
    fixed
    tabList={[
      { title: '首页', iconPrefixClass:'iconfont', iconType: 'icon-mihome_select' },
      { title: '动态', iconPrefixClass:'iconfont', iconType: 'icon-ziyuan', },
      { title: '会员', iconPrefixClass:'iconfont', iconType: 'icon-mihome_select' },
      { title: '消息', iconPrefixClass:'iconfont', iconType: 'icon-mihome_select', text: '100', max: 99 },
      { title: '我的', iconPrefixClass:'iconfont', iconType: 'icon-mihome_select' }
    ]}
    onClick={clickHandle}
    current={current}
  />
}
