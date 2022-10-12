/**
 * ts 报错：‘new‘ expression, whose target lacks a construct signature, implicitly has an ‘any‘ type.
即将要实例化的函数中没有 construct，并且隐式类型为 any
报错原因
很多基于 ES5 的构造函数的写法在 TS 的检查下不支持，目前还会有很多较老的库没有更新为 TS 项目，并且已经非常稳定没有维护更新的计划。
显示的将构造函数的类型定义为 any，兼容 ES5 写法中没有 construct 的问题
 */

const RedisStore = new (Redis as any)({
  host: RedisConfig.host,
  port: RedisConfig.port,
});

/**
 * 【TS】元素隐式具有 "any" 类型，因为类型为 "string" 的表达式不能用于索引类型
举例
或直接忽略错误 tsconfig.json文件增加配置
{
  "compilerOptions": {
    "suppressImplicitAnyIndexErrors": true,
  }
}
 */

export const formatDateType = {
  year: "YYYY",
  month: "YYYY-MM",
  day: "YYYY-MM-DD",
  hour: "YYYY-MM-DD HH",
  minute: "YYYY-MM-DD HH:mm",
  second: "YYYY-MM-DD HH:mm:ss",
  week: "",
  "week-day": "",
};

const precision: keyof typeof formatDateType = "month";

const t = formatDateType[precision];
