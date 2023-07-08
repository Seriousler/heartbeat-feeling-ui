// import accountModel from './accountModel';
import {indexModel} from "@/pages/index/model";
import {dva} from '@/utils';
import commonModel from './common';

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
