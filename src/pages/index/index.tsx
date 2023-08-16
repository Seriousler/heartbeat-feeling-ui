import { FC, useEffect, useState } from 'react'
import { useDidHide, useDidShow, useLoad, usePullDownRefresh, useReady, useRouter, getEnv } from '@tarojs/taro'
import { useDispatch } from 'react-redux'
// import {dayjs, lodash} from '@/utils'
// import type { ModelStates } from '@/store'
// import {AtIcon} from 'taro-ui'
import Swiper from "@/components/Swiper";
import Grid from "@/components/Grid";
import Tabs from "@/components/Tabs";
// import IconFont from '@/components/Iconfont'
import LayoutView from '@/components/LayoutView'
import CardList from "@/components/CardList";
// import ScrollingLoading from '@/components/ScrollingLoading'
import {api} from "@/api";
// import {getObjectKeys} from "@/utils";
import './index.scss'
// import Drawer from '@/components/Drawer'
// import SvgIcon from '@/components/SvgIcon'
// import IconFont from '@/components/Iconfont'
// import Button from '@/components/Button'

const Index: FC = () => {
  const [current, setCurrent] = useState<number>(0)
  const [tabData] = useState([1, 2, 3, 4, 5, 6])
  // const [drawerShow, setDrawerShow] = useState(false)
  const router = useRouter()
  // const state = useSelector<ModelStates>((state: ModelStates) => state)
  // console.log(111, state, dayjs(), lodash.random());
  // const common = useSelector<ModelStates>((state: ModelStates)  => state.common)
  const dispatch = useDispatch();
  // console.log('getObjectKeys', getObjectKeys(router));
  // 可以使用所有的 React Hooks
  useEffect( () => {
    // getUser().then((res: any) => {
    //   console.log('res', res)
    // })
    // getLogin()
    // getLogin().then(res => {
    //   console.log(222, res)
    // })
    // console.log(111, api)
    // api.login().then(res => {
    //   console.log(123, res)
    //   api.userSave({openid: res.data.data.openid})
    // })
    // api.pageList({
    //   "pageNum": 0,
    //   "pageSize": 0
    // }).then(res => {
    //   console.log(456, res)
    // })
    // api.pageList().then(res => {
    //   console.log(456, res)
    // })
    console.info('useEffect', { router, api })
  }, [])

  const tabList = [
    { title: '活跃', content: <CardList objList={[
        {
          avatar: require('../../assets/svg/woman.svg'),
          name: '闭月',
          subTitle: ['已购房'],
          tags: ['31岁', '170cm', '本科'],
          avatars: [require('../../assets/svg/woman.svg'), require('../../assets/svg/man.svg')]
        },
        {
          avatar: require('../../assets/svg/woman.svg'),
          name: '羞花',
          subTitle: ['已购房'],
          tags: ['30岁', '170cm', '本科'],
          avatars: [require('../../assets/svg/woman.svg'), require('../../assets/svg/man.svg')]
        },
        {
          avatar: require('../../assets/svg/woman.svg'),
          name: '羞花',
          subTitle: ['已购房'],
          tags: ['30岁', '170cm', '本科'],
          avatars: [require('../../assets/svg/woman.svg'), require('../../assets/svg/man.svg')]
        },
        {
          avatar: require('../../assets/svg/woman.svg'),
          name: '羞花',
          subTitle: ['已购房'],
          tags: ['30岁', '170cm', '本科'],
          avatars: [require('../../assets/svg/woman.svg'), require('../../assets/svg/man.svg')]
        }
    ]} /> },
    { title: '推荐', content: <CardList objList={[
        {
          avatar: require('../../assets/svg/woman.svg'),
          name: '闭月',
          subTitle: ['已购房'],
          tags: ['31岁', '170cm', '本科'],
          avatars: [require('../../assets/svg/woman.svg'), require('../../assets/svg/man.svg')]
        },
        {
          avatar: require('../../assets/svg/woman.svg'),
          name: '羞花',
          subTitle: ['已购房'],
          tags: ['30岁', '170cm', '本科'],
          avatars: [require('../../assets/svg/woman.svg'), require('../../assets/svg/man.svg')]
        }
      ]} /> },
    { title: '实名', content: <CardList objList={[
        {
          avatar: require('../../assets/svg/woman.svg'),
          name: '闭月',
          subTitle: ['已购房'],
          tags: ['31岁', '170cm', '本科'],
          avatars: [require('../../assets/svg/woman.svg'), require('../../assets/svg/man.svg')]
        },
        {
          avatar: require('../../assets/svg/woman.svg'),
          name: '羞花',
          subTitle: ['已购房'],
          tags: ['30岁', '170cm', '本科'],
          avatars: [require('../../assets/svg/woman.svg'), require('../../assets/svg/man.svg')]
        }
      ]} /> },
    { title: '最新', content: <CardList objList={[
        {
          avatar: require('../../assets/svg/woman.svg'),
          name: '闭月',
          subTitle: ['已购房'],
          tags: ['31岁', '170cm', '本科'],
          avatars: [require('../../assets/svg/woman.svg'), require('../../assets/svg/man.svg')]
        },
        {
          avatar: require('../../assets/svg/woman.svg'),
          name: '羞花',
          subTitle: ['已购房'],
          tags: ['30岁', '170cm', '本科'],
          avatars: [require('../../assets/svg/woman.svg'), require('../../assets/svg/man.svg')]
        }
      ]} />  }
  ]

  useLoad(() => {
    console.log('Page loaded.', {
      // state,
      // common,
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
    <LayoutView>
      <Swiper></Swiper>
      <Grid mode='square' hasBorder={false} data={
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
      <Tabs tabs={tabList}></Tabs>
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
