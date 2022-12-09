function getString(value: unknown): string {
  return value; // Error 不能将类型“unknown”分配给类型“string”。
}

/**
 * 通过typeof类型判断
 */
function getString(value: unknown): string {
  if (typeof value === "string") {
    return value;
  }
  return String(value); // Error
}

/**
 * 用as 断言
 */
const value: unknown = "Hello World";
const foo: string = value; // Error
const bar: string = value as string; // OK

/**
 * 若断言错误  运行时会报错
 */

const value: unknown = "Hello World";

const bar: number = value as number; // runtime Error
