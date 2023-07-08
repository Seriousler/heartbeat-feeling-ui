import { View } from '@tarojs/components';
import { useState } from 'react';
import { AtNavBar } from 'taro-ui'
// import Taro from "@tarojs/taro";
import {useNavInfo} from "@/hooks";
import './index.scss'

export default function NavBar(props) {
  const [current] = useState(0)
  const {appHeaderHeight} = useNavInfo()
  console.log('NavBar=====>', View, props, current, appHeaderHeight);
  const clickHandle = (e) => {
    console.log('e========>', e);
  }
  // return <AtNavBar
  //   onClickRgIconSt={clickHandle}
  //   onClickRgIconNd={clickHandle}
  //   onClickLeftIcon={clickHandle}
  //   color='#000'
  //   leftText='返回'
  //   rightFirstIconType='bullet-list'
  //   rightSecondIconType='user'
  // />

  return (
    <AtNavBar
      onClickRgIconSt={clickHandle}
      onClickRgIconNd={clickHandle}
      onClickLeftIcon={clickHandle}
      fixed
      color='#000'
      title='个人中心'
      leftText='返回'
      rightFirstIconType='bullet-list'
      rightSecondIconType='user'
    />
  )
}
