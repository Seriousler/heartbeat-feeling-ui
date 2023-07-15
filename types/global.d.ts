declare type Nullable<T> = T | null;
declare type Recordable<T = any> = Record<string, T>;
declare type ReadonlyRecordable<T = any> = {
  readonly [key: string]: T;
};
declare type Indexable<T = any> = {
  [key: string]: T;
};
declare type DeepPartial<T> = {
  [P in keyof T]?: DeepPartial<T[P]>;
};
declare function parseInt(param: string | number, radix?: number): number;
declare function parseFloat(param: string | number): number;
declare function objectKeys<T extends object>(obj: T): (keyof T)[]
// 指定字段改为可选类型
declare type PartialCustom<T, K extends keyof T> = {
  [P in K]?: T[P];
} & Omit<T, K>
// 指定字段改为必选类型
declare type RequiredCustom<T, K extends keyof T> = {
  [P in K]-?: T[P];
} & Omit<T, K>
