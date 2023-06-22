import { View, Text } from '@tarojs/components'
import { useEffect } from 'react'
import './index.scss'

export default function Index() {

  useEffect(() => {
    console.log('Page loaded.')
  })

  return (
    <View className='index'>
      <Text>Hello world!</Text>
    </View>
  )
}
