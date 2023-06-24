// import accountModel from './accountModel';
import commonModel from './common';
import {indexModel} from "@/pages/index/model";
import {dva} from '@/utils';

const store = dva.createApp({
  initialState: {},
  models: [
    // accountModel,
    commonModel,
    indexModel
  ]  
}).getStore()

export default store
export * from './types'