import { View } from '@tarojs/components';
import { useState } from 'react';
import { AtNavBar } from 'taro-ui'

export default function NavBar(props) {
  const [current] = useState(0)
  console.log('NavBar=====>', View, props, current);
  const clickHandle = (e) => {
    console.log('e========>', e);
  }
  return <AtNavBar
    onClickRgIconSt={clickHandle}
    onClickRgIconNd={clickHandle}
    onClickLeftIcon={clickHandle}
    color='#000'
    leftText='返回'
    rightFirstIconType='bullet-list'
    rightSecondIconType='user'
  />
}
