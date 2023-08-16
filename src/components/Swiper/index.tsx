import {Swiper as TaroSwiper, SwiperItem, Image} from '@tarojs/components'
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
      <Image mode='aspectFill' src={require('../../assets/images/my.png')}></Image>
      {/*<View className='demo-text-1'>1</View>*/}
    </SwiperItem>
    <SwiperItem>
      <Image mode='aspectFill' src={require('../../assets/images/my.png')}></Image>
    </SwiperItem>
    <SwiperItem>
      <Image mode='aspectFill' src={require('../../assets/images/my.png')}></Image>
    </SwiperItem>
  </TaroSwiper>
}
