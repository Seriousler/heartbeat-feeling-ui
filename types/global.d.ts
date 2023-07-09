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
declare function parseInt(s: string | number, radix?: number): number;
declare function parseFloat(string: string | number): number;
declare function objectKeys<T extends object>(obj: T): (keyof T)[]
// function getObjectKeys<T extends object>(obj: T): (keyof T)[] {
//   return Object.keys(obj) as (keyof T)[];
// }
