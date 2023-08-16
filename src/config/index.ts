// 请求地址
export enum HOST {
  PROD = 'http://xxx',
  QA = 'http://127.0.0.1:8001',
}
export const MAIN_HOST = HOST.QA

// 服务前缀
export enum PREFIX {
  PROD = '/heartbeat-feeling-api',
  QA = '/heartbeat-feeling-api',
}
export const MAIN_PREFIX = PREFIX.QA
