import { FC, useEffect, useState } from 'react'
import { useDidHide, useDidShow, useLoad, usePullDownRefresh, useReady, useRouter, getEnv } from '@tarojs/taro'
import { View, Image } from '@tarojs/components'
import { useDispatch, useSelector } from 'react-redux'
// import {dayjs, lodash} from '@/utils'
import type { ModelStates } from '@/store'
// import {AtIcon} from 'taro-ui'
import Swiper from "@/components/Swiper";
import Grid from "@/components/Grid";
// import IconFont from '@/components/Iconfont'
import { AtTabs, AtTabsPane, AtAvatar } from 'taro-ui'
import LayoutView from '@/components/LayoutView'
// import ScrollingLoading from '@/components/ScrollingLoading'
import {getLogin, getUser} from "@/api";
import {getObjectKeys} from "@/utils";
import './index.scss'
// import Drawer from '@/components/Drawer'
// import SvgIcon from '@/components/SvgIcon'
// import IconFont from '@/components/Iconfont'
// import Button from '@/components/Button'

const Index: FC = () => {
  const [current, setCurrent] = useState(0)
  const [tabData, setTabData] = useState([1, 2, 3, 4, 5, 6])
  // const [drawerShow, setDrawerShow] = useState(false)
  const router = useRouter()
  const state = useSelector<ModelStates>(state => state)
  // console.log(111, state, dayjs(), lodash.random());
  const common = useSelector<ModelStates>(state => state.common)
  const dispatch = useDispatch();
  // console.log('getObjectKeys', getObjectKeys(router));
  // 可以使用所有的 React Hooks
  useEffect(() => {
    getUser().then((res: any) => {
      console.log('res', res)
    })
    getLogin()
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
    <LayoutView>
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
          {
            tabData.map((tpl) => (
              <View className='hf-card'>
              <View>
                <AtAvatar image='http://rxa3laqbk.hn-bkt.clouddn.com/800010693.jpg?e=1688485783&token=5n9vhE1M2383tSet6jOBtU0N9W2BDrS4RpdldwWx:OZb1GpvQsrtYgN6nz-lWcs8G8AE='></AtAvatar>
              </View>
              <View>
                {tpl}这也是内容区 可以随意定义功能
              </View>
            </View>))
          }
          {/*<AtCard*/}
          {/*  className="hf-card"*/}
          {/*  note='小Tips'*/}
          {/*  thumb='http://www.logoquan.com/upload/list/20180421/logoquan15259400209.PNG'*/}
          {/*>*/}
          {/*  这也是内容区 可以随意定义功能*/}
          {/*</AtCard>*/}
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
      {/*<AtButton onClick={(value) => {*/}
      {/*  console.log(value, drawerShow);*/}
      {/*  setDrawerShow(true)*/}
      {/*}} type='primary' size='normal'>相亲条件</AtButton>*/}
      {/*<Drawer show={drawerShow} ></Drawer>*/}
      {/* <IconFont name="ziyuan" color={['#333', 'rgb(50, 124, 39)']} size={50} /> */}
      {/* <AtIcon prefixClass='iconfont' value='icon-guolv' size='30' color='#F00'></AtIcon> */}
    </LayoutView>
  )
}

export default Index
