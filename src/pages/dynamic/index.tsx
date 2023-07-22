import { FC } from 'react'
import { View } from '@tarojs/components'
import Swiper from "@/components/Swiper";
import LayoutView from '@/components/LayoutView'
import './index.scss'

const Dynamic: FC = () => {
  return (
    <LayoutView>
      <Swiper></Swiper>
      <View>动态</View>
    </LayoutView>
  )
}

export default Dynamic
