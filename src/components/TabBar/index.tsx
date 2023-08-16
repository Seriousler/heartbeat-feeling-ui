import {FC, useEffect, useRef} from 'react';
import { AtTabBar } from 'taro-ui';
import Taro from "@tarojs/taro";
import store from "@/store";
import './index.scss';

enum pagePath {
  '/pages/index/index',
  '/pages/dynamic/index',
  '/pages/member/index',
  '/pages/message/index',
  '/pages/mine/index'
}
const TabBar: FC<Recordable> = (props) => {
  const {current} = store.getState().tab
  const clickHandle = (index: number) => {
    Taro.switchTab({
      url: pagePath[index]
    })
    store.dispatch({
      type: 'tab/setCurrent',
      payload: index,
    })
  }
  const tabBarRef = useRef(null);

  useEffect(() => {
    tabBarRef.current && tabBarRef.current.forceUpdate();
  }, []);
  return (
    <AtTabBar
      ref={tabBarRef}
      fixed
      tabList={props.tabList}
      onClick={clickHandle}
      current={current}
    />
  )
}

export default TabBar
