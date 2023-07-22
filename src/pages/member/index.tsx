import { FC } from 'react'
import { View } from '@tarojs/components'
import Swiper from "@/components/Swiper";
import LayoutView from '@/components/LayoutView'
import './index.scss'

const Member: FC = () => {
  return (
    <LayoutView>
      <Swiper></Swiper>
      <View>会员</View>
    </LayoutView>
  )
}

export default Member
