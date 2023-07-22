import { useState } from 'react';
import { AtTabBar } from 'taro-ui';
import Taro from "@tarojs/taro";
import './index.scss';

enum pagePath {
  '/pages/index/index',
  '/pages/dynamic/index',
  '/pages/member/index',
  '/pages/message/index',
  '/pages/mine/index'
}
export default function TabBar(props) {
  const [current, setCurrent] = useState(0)
  // console.log('NavBar=====>', props);
  const clickHandle = (index: number) => {
    console.log('e========>', index, pagePath[index]);
    // console.log(123, pagePath[index])
    Taro.switchTab({
      url: pagePath[index]
    })
    setCurrent(index)
  }
  return <AtTabBar
    fixed
    tabList={props.tabList}
    onClick={clickHandle}
    current={current}
  />
}
