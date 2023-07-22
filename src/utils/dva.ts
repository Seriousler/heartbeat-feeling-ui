// import Taro, {hideLoading, showToast, getEnv} from '@tarojs/taro';
import { createStore } from 'dva-core';
import { createLogger } from 'redux-logger';
import createLoading from 'dva-loading';

export interface Dva {
  createApp: (opt: any) => any
  getDispatch: () => any
}

let app: any;
let store: any;
let dispatch: any;
let registered: any;

export const dva: Dva = {
  createApp(opt) {
    // redux日志
    opt.onAction = []
    if (opt.enableLog) {
        opt.onAction.push(createLogger())
    }
    app = createStore(opt)
    app.use(createLoading())
    // 注入model
    if (!registered) {
        opt.models.forEach(model => app.model(model));
    }
    registered = true;
    app.start()
    // 设置store
    store = app._store;
    app.getStore = () => store;
    app.use({
        onError(err: any) {
            console.log(err);
        }
    })
    // 设置dispatch
    dispatch = store.dispatch;
    app.dispatch = dispatch;
    return app;
  },
  getDispatch() {
    return app.dispatch;
  }
};
