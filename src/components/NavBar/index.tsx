import { View } from '@tarojs/components';
import { FC, useState } from 'react';
// import { AtIcon, AtNavBar } from 'taro-ui'
// import Taro from "@tarojs/taro";
import {useNavInfo} from "@/hooks";
import IconFont from '@/components/Iconfont';
import './index.scss'

interface NavBarProps {
  [key: string]: any
}

const NavBar: FC<NavBarProps> = (props) => {
  const [current] = useState(0)
  const {appHeaderHeight} = useNavInfo()
  // console.log('NavBar=====>', View, props, current, appHeaderHeight);
  // style={{height: appHeaderHeight + 'px'}}
  // const clickHandle = (e) => {
  //   console.log('e========>', e);
  // }
  // console.log(123, <IconFont name="mihome_select" color={['#000']} size={50} />);

  return (
    <View
      className='hf-nav-bar'
      style={{height: appHeaderHeight + 'px'}}>
      {/* <AtNavBar
        onClickRgIconSt={clickHandle}
        onClickRgIconNd={clickHandle}
        onClickLeftIcon={clickHandle}
        // leftIconType='chevron-left'
        // leftIconType={{value: home, size: 30, color: '#F00'}}
      >
        <View>HF</View>
      </AtNavBar> */}
      <View className='hf-nav-bar-left'>
        {/* {iconToBase64(<IconFont name="mihome_select" color={['#000']} size={50} />)} */}
        <IconFont name="mihome_select" color={['#000']} size={35} />
      </View>
      <View className='hf-nav-bar-center'>heartbeat-feeling</View>
      <View className='hf-nav-bar-right'>

      </View>
    </View>
  )
}

export default NavBar
