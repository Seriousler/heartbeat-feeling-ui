import { useEffect } from 'react'
import { useDidHide, useDidShow, useLoad, usePullDownRefresh, useReady, useRouter, getEnv } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { useDispatch, useSelector } from 'react-redux'
import {dayjs, lodash} from '@/utils'
import type { ModelStates } from '@/store'
import NavBar from '@/components/NavBar';
import {AtIcon} from 'taro-ui'
import TabBar from '@/components/TabBar';
import Swiper from "@/components/Swiper";
import Grid from "@/components/Grid";

export default function Index() {
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

  return (
    <View className='index'>
      <NavBar></NavBar>
      <TabBar title={'navbar'}></TabBar>
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
      <Text>Hello world222222222!</Text>
      <AtIcon prefixClass='iconfont' value='icon-guolv' size='30' color='#F00'></AtIcon>
    </View>
  )
}
