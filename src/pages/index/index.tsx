import { useEffect, useState } from 'react'
import { useDidHide, useDidShow, useLoad, usePullDownRefresh, useReady, useRouter, getEnv } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { useDispatch, useSelector } from 'react-redux'
import {dayjs, lodash} from '@/utils'
import type { ModelStates } from '@/store'
import NavBar from '@/components/NavBar';
// import {AtIcon} from 'taro-ui'
import TabBar from '@/components/TabBar';
import Swiper from "@/components/Swiper";
import Grid from "@/components/Grid";
import IconFont from '@/components/Iconfont'
import { AtButton, AtTabs, AtTabsPane } from 'taro-ui'
import './index.scss'
import Drawer from '@/components/Drawer'
import Button from '@/components/Button'

export default function Index() {
  const [current, setCurrent] = useState(0)
  const [drawerShow, setDrawerShow] = useState(false)
  const router = useRouter()
  const state = useSelector<ModelStates>(state => state)
  console.log(111, state, dayjs(), lodash.random());
  const common = useSelector<ModelStates>(state => state.common)
  const dispatch = useDispatch();

  // 可以使用所有的 React Hooks
  useEffect(() => {
    console.info('useEffect', { router })
  }, [])

  useLoad(() => {
    console.log('Page loaded.', {
      state,
      common,
      env: getEnv(),
    })
    dispatch({
      type: 'common/pageInit',
      payload: '测试111'
    })
  })

  // 对应 onReady
  useReady(() => { })

  // 对应 onShow
  useDidShow(() => { })

  // 对应 onHide
  useDidHide(() => { })

  usePullDownRefresh(() => { })
  const tabList = [{ title: '活跃' }, { title: '推荐' }, { title: '实名' }, { title: '最新' }]
  const clickHandle = (value) => {
    setCurrent(value)
  }

  return (
    <View className='index'>
      <NavBar></NavBar>
      <TabBar title={'navbar'} tabList={[
        { title: '首页', iconPrefixClass:'icon', iconType: 'mihome_select' },
        { title: '动态', iconPrefixClass:'icon', iconType: 'ziyuan', },
        { title: '会员', iconPrefixClass:'icon', iconType: 'mihome_select' },
        { title: '消息', iconPrefixClass:'icon', iconType: 'mihome_select', text: '100', max: 99 },
        { title: '我的', image: require('@/assets/images/my.png') }
      ]}></TabBar>
      <Swiper></Swiper>
      <Grid mode={'square'} hasBorder={false} data={
        [
          {
            image: 'https://img12.360buyimg.com/jdphoto/s72x72_jfs/t6160/14/2008729947/2754/7d512a86/595c3aeeNa89ddf71.png',
            value: '红娘评语'
          },
          {
            image: 'https://img20.360buyimg.com/jdphoto/s72x72_jfs/t15151/308/1012305375/2300/536ee6ef/5a411466N040a074b.png',
            value: '最新活动'
          },
          {
            image: 'https://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png',
            value: '我们脱单了'
          }
        ]
      }></Grid>
      <AtTabs className='index-tabs' current={current} tabList={tabList} onClick={clickHandle}>
        <AtTabsPane current={current} index={0} >
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;' >标签页一的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={1}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页二的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
        </AtTabsPane>
        <AtTabsPane current={current} index={2}>
          <View style='padding: 100px 50px;background-color: #FAFBFC;text-align: center;'>标签页三的内容</View>
        </AtTabsPane>
      </AtTabs>
      <AtButton onClick={(value) => {
        console.log(value, drawerShow);
        setDrawerShow(true)
      }} type='primary' size='normal'>相亲条件</AtButton>
      <Drawer show={drawerShow} ></Drawer>
      {/* <IconFont name="ziyuan" color={['#333', 'rgb(50, 124, 39)']} size={50} /> */}
      {/* <AtIcon prefixClass='iconfont' value='icon-guolv' size='30' color='#F00'></AtIcon> */}
    </View>
  )
}
