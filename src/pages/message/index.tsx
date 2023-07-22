import { FC } from 'react'
import { View } from '@tarojs/components'
import Swiper from "@/components/Swiper";
import LayoutView from '@/components/LayoutView'
import './index.scss'

const Message: FC = () => {
  return (
    <LayoutView>
      <Swiper></Swiper>
      <View>消息</View>
    </LayoutView>
  )
}

export default Message
