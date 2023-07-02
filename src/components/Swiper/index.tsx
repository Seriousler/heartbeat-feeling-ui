import {Swiper as TaroSwiper, SwiperItem, View} from '@tarojs/components'
import './index.scss';

export default function Swiper() {
  return <TaroSwiper
    className='test-h'
    indicatorColor='#999'
    indicatorActiveColor='#333'
    circular
    indicatorDots
    autoplay>
    <SwiperItem>
      <View className='demo-text-1'>1</View>
    </SwiperItem>
    <SwiperItem>
      <View className='demo-text-2'>2</View>
    </SwiperItem>
    <SwiperItem>
      <View className='demo-text-3'>3</View>
    </SwiperItem>
  </TaroSwiper>
}
