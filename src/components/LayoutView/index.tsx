import {Fragment, PropsWithChildren, useState} from "react";
import {Text, View} from "@tarojs/components";
// import Taro from "@tarojs/taro";
import { useNavInfo } from "@/hooks";
import {usePullDownRefresh, useReachBottom} from "@tarojs/taro";
import {AtActivityIndicator} from "taro-ui";
import TabBar from "@/components/TabBar";
import NavBar from "@/components/NavBar";
import './index.scss'
import {throttle} from "@/utils";

export default function LayoutView(props) {
  const { children, reachBottom, pullDown }: PropsWithChildren<Recordable> = props
  const {appHeaderHeight} = useNavInfo()
  const showStyle = {height: 'auto'}
  const hideStyle = {height: 0}
  const [showPullUp, setShowPullUp] = useState<{height: number | string}>(hideStyle)
  const [showDropDown, setShowDropDown] = useState<{height: number | string}>(hideStyle)
  const [upText] = useState('加载中...')
  const [downText] = useState('下拉刷新...')

  usePullDownRefresh(async () => {
    console.log('onPullDownRefresh')
    setShowDropDown(showStyle)
    if (pullDown) {
      try {
        await pullDown()
      } finally {
        setShowDropDown(hideStyle)
      }
    } else {
      const timer = setTimeout(function () {
        setShowDropDown(hideStyle)
        window.clearTimeout(timer)
      }, 2000)
    }
  })
  useReachBottom(async () => {
    setShowPullUp(showStyle)
    if (reachBottom) {
      try {
        await reachBottom()
      } finally {
        setShowPullUp(hideStyle)
      }
    } else {
      const timer = setTimeout(function () {
        setShowPullUp(hideStyle)
        window.clearTimeout(timer)
      }, 2000)
    }
  })
  return (
    <View id='app' style={{paddingTop: appHeaderHeight + 'px'}}>
      <NavBar></NavBar>
      <View className='content' style={{paddingBottom: '70px'}}>
        <View className='drop-down' style={showDropDown}>
          <Text className='down-text'>{downText}</Text>
        </View>
        <Fragment>{children}</Fragment>
        <View className='pull-up' style={showPullUp}>
          <AtActivityIndicator />
          <Text className='up-text'>{upText}</Text>
        </View>
      </View>
      <TabBar title='tabbar' tabList={[
        { title: '首页', image: require('@/assets/images/my.png'), selectedImage: require('@/assets/svg/mihome_select.svg') },
        { title: '动态', image: require('@/assets/images/my.png') },
        { title: '会员', image: require('@/assets/images/my.png') },
        { title: '消息', image: require('@/assets/images/my.png') },
        { title: '我的', image: require('@/assets/images/my.png') }
      ]}></TabBar>
    </View>
  )
}
