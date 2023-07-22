
import { FC } from 'react'
import Taro, { Component, Config } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { HomeProps, HomeState } from './type.ts'
import './index.scss'

// @connect(({ home }) => ({
//     ...home
// }))

const Home: FC = (props: HomeProps) => {
  return (
    <View className='home-wrap'>Home</View>
  )
}

export default Home
