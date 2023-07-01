import { useEffect } from 'react'
import { useDidHide, useDidShow, useLoad, usePullDownRefresh, useReady, useRouter, getEnv } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { useDispatch, useSelector } from 'react-redux'
import {dayjs, lodash} from '@/utils'
import type { ModelStates } from '@/store'
// import NavBar from '@/components/NavBar';
import {AtIcon} from 'taro-ui'
import TabBar from '@/components/TabBar';


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
      <TabBar title={'navbar'}></TabBar>
      <Text>Hello world222222222!</Text>
      <AtIcon prefixClass='iconfont' value='icon-guolv' size='30' color='#F00'></AtIcon>
    </View>
  )
}
