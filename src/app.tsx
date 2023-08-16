import {useEffect, PropsWithChildren, FC} from 'react'
import {useLaunch, useDidShow, useDidHide, useError} from '@tarojs/taro'
import { Provider } from 'react-redux';
import store from './store';
import './styles/index.scss'
import './app.scss'

const App: FC<PropsWithChildren<Recordable>> = ({ children }) => {

  useEffect(() => {}, []);

  // onLaunch
  useLaunch(() => {
    console.log("App launched.");
  });

  // onShow
  useDidShow(() => {});

  // onHide
  useDidHide(() => {});

  // onError
  useError((error) => {
    console.log(error);
  });
  // children 是将要会渲染的页面
  return <Provider store={store}>
    {children}
  </Provider>
}
export default App
