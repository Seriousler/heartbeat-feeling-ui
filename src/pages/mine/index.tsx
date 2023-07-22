import { FC } from 'react'
import { View } from '@tarojs/components'
import Swiper from "@/components/Swiper";
import LayoutView from '@/components/LayoutView'
import './index.scss'

const Mine: FC = () => {
  return (
    <LayoutView>
      <Swiper></Swiper>
      <View>我的</View>
    </LayoutView>
  )
}

export default Mine
