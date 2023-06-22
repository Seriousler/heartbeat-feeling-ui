import { View, Text } from '@tarojs/components'
import './index.scss'
import { useEffect } from 'react'

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
