import { View, Text } from '@tarojs/components'
import { useEffect } from 'react'
import { styled } from '@linaria/react';
import './index.scss'

export default function Index() {

  const Title = styled.h1`font-family: inherit;`
  const medium = 30
  const color = 'red'
  const Navbar = styled.nav`
  font-size: ${medium}px;
  color: ${color};
  border: 1px solid red;
  &:hover {
    border-color: blue;
  }
  ${Title} {
    margin-bottom: 24px;
  }`

  useEffect(() => {
    console.log('Page loaded.')
  })
  return (
    <View className='index'>
      <Text>Hello world!222</Text>
      <Navbar color="#999">
        <Title>haaaaaaaa</Title>
      </Navbar>
    </View>
  )
}
