// import accountModel from './accountModel';
// import {indexModel} from "@/pages/index/model";
import {dva} from '@/utils';
// import commonModel from './models/common';

const store = dva.createApp({
  initialState: {},
  models: []
}).getStore()

export default store
export * from './types'
