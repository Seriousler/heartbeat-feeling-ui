// 获取对象的属性名，并进行类型约束和类型检测
export const getObjectKeys = <T extends object>(obj: T): (keyof T)[] => {
  return Object.keys(obj) as (keyof T)[];
}

// 获取对象的所有属性名，包括不可枚举属性和 Symbol 类型的属性名，并进行类型约束和类型检测
export const getObjectOwnKeys = <T extends object>(obj: T): (keyof T)[] => {
  return Reflect.ownKeys(obj) as (keyof T)[];
}