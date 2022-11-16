/**
 * Day.js 是一个轻量的 JavaScript 时间日期处理库，和 Moment.js 的 API 设计保持完全一样
 */

dayjs(); // 当前时间 dayjs格式
Date.now(); // 当前时间 时间戳
dayjs("1995-12-25"); // 1995-12-25
dayjs(Date.now() - 24 * 60 * 60 * 1000); // 昨天

// 返回修改后的值 本身也会被修改
dayjs().add(7, "days"); // 之后的第7天
dayjs().subtract(1, "months"); // 上个月
dayjs().startOf("months"); // 获取一月初
dayjs().endOf("year"); // 获取一年年末

dayjs("2010-10-20").isBefore("2010-10-21"); // 早于
dayjs("2010-10-20").isAfter("2010-10-19"); // 晚于
dayjs().isLeapYear(); // 闰年
