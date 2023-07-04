import { AtDrawer } from 'taro-ui'
import './index.scss'

export default function Drawer(props) {
  console.log('props', props)
  const onClose = () => {
    console.log('onClose');
  }
  return <AtDrawer 
    show={props.show}
    mask 
    onClose={onClose} 
    items={['菜单1', '菜单2']}
  ></AtDrawer>
}
