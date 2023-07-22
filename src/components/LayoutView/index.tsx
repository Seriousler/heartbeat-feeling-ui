import {Fragment, PropsWithChildren, useState} from "react";
import {Text, View} from "@tarojs/components";
// import Taro from "@tarojs/taro";
import { useNavInfo } from "@/hooks";
import Taro, {usePullDownRefresh, useReachBottom} from "@tarojs/taro";
import {AtActivityIndicator} from "taro-ui";
import TabBar from "@/components/TabBar";
import NavBar from "@/components/NavBar";
import './index.scss'
import {throttle} from "@/utils";

export default function LayoutView(props) {
  const { children, reachBottom, pullDown }: PropsWithChildren<Recordable> = props
  const {appHeaderHeight} = useNavInfo()
  const [showPullUp, setShowPullUp] = useState({height: 0})
  const [showDropDown, setShowDropDown] = useState('block')
  const [upText] = useState('加载中...')
  const [downText] = useState('下拉刷新...')

  usePullDownRefresh(async () => {
    console.log('onPullDownRefresh')
    setShowDropDown('block')
    // if (pullDown) {
    //   try {
    //     await pullDown()
    //   } finally {
    //     setShowDropDown('none')
    //   }
    // } else {
    //   setTimeout(function () {
    //     setShowDropDown('none')
    //   }, 2000)
    //   window.clearTimeout()
    // }
  })
  useReachBottom(async () => {
    setShowPullUp('block')
    // if (reachBottom) {
    //   try {
    //     await reachBottom()
    //   } finally {
    //     setShowPullUp('none')
    //   }
    // } else {
    //   setTimeout(function () {
    //     setShowPullUp('none')
    //   }, 2000)
    //   window.clearTimeout()
    // }
  })

  return (
    <View id='app' style={{paddingTop: appHeaderHeight + 'px'}}>
      <NavBar></NavBar>
      <View className='content' style={{paddingBottom: '70px'}}>
        <View className='drop-down' style={{display: showDropDown}}>
          <Text className='down-text'>{downText}</Text>
        </View>
        <Fragment>{children}</Fragment>
        <View className='pull-up' style={showPullUp}>
          <AtActivityIndicator />
          <Text className='up-text'>{upText}</Text>
        </View>
      </View>
      <TabBar
        title='tabbar'
        tabList={[
          { title: '首页', image: require('@/assets/images/my.png'), selectedImage: require('@/assets/svg/mihome_select.svg') },
          { title: '动态', image: require('@/assets/images/my.png') },
          { title: '会员', image: require('@/assets/images/my.png') },
          { title: '消息', image: require('@/assets/images/my.png') },
          { title: '我的', image: require('@/assets/images/my.png') }
        ]}></TabBar>
    </View>
  )
}
