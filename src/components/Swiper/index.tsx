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
      <Image mode='aspectFill' src='http://rxa3laqbk.hn-bkt.clouddn.com/800010693.jpg?e=1688485783&token=5n9vhE1M2383tSet6jOBtU0N9W2BDrS4RpdldwWx:OZb1GpvQsrtYgN6nz-lWcs8G8AE='></Image>
      {/*<View className='demo-text-1'>1</View>*/}
    </SwiperItem>
    <SwiperItem>
      <Image mode='aspectFill' src='http://rxa3laqbk.hn-bkt.clouddn.com/800010693.jpg?e=1688485783&token=5n9vhE1M2383tSet6jOBtU0N9W2BDrS4RpdldwWx:OZb1GpvQsrtYgN6nz-lWcs8G8AE='></Image>
    </SwiperItem>
    <SwiperItem>
      <Image mode='aspectFill' src='http://rxa3laqbk.hn-bkt.clouddn.com/800010693.jpg?e=1688485783&token=5n9vhE1M2383tSet6jOBtU0N9W2BDrS4RpdldwWx:OZb1GpvQsrtYgN6nz-lWcs8G8AE='></Image>
    </SwiperItem>
  </TaroSwiper>
}
