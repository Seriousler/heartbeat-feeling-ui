import {FC} from 'react';
import {AtAvatar, AtList, AtTag} from 'taro-ui';
import {Text, View} from "@tarojs/components";
import './index.scss';

interface TabsProps {
  [key: string]: any
}
const CardList: FC<TabsProps> = (props) => {
  const { objList } = props
  return (
    <AtList className='hf-list' hasBorder={false}>
      {objList.map((obj, index) => (
        <View className='hf-card' key={index}>
          <View className='hf-card-avatar'>
            <AtAvatar image={obj.avatar}></AtAvatar>
          </View>
          <View className='hf-card-content'>
            <View className='hf-card-content-name'>
              {obj.name}
            </View>
            <View className='hf-card-content-text'>
              {obj.subTitle.map(str => (
                <Text>{str}</Text>
              ))}
            </View>
            <View className='hf-card-content-tags'>
              {obj.tags.map(tag => (
                <AtTag type='primary' circle>{tag}</AtTag>
              ))}
            </View>
            <View className='hf-card-content-avatar-list'>
              {obj.avatars.map(img => (
                <AtAvatar className='hf-card-avatar-item' image={img} size='small'></AtAvatar>
              ))}
            </View>
          </View>
        </View>
      ))}
    </AtList>
  )
}

export default CardList
