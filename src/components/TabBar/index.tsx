import { useState } from 'react';
import { AtTabBar } from 'taro-ui';
import './index.scss';
export default function TabBar(props) {
  const [current, setCurrent] = useState(0)
  // console.log('NavBar=====>', props);
  const clickHandle = (e) => {
    console.log('e========>', e);
    setCurrent(e)
  }
  return <AtTabBar
    fixed
    tabList={props.tabList}
    onClick={clickHandle}
    current={current}
  />
}
