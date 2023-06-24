import { View } from '@tarojs/components';
import { useState } from 'react';
import { AtNavBar } from 'taro-ui'

export default function NavBar(props) {
  console.log(222, View, props);
  const [current, setCurrent] = useState(0)
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