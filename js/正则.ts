// 限制长度
const reg = /^.{1,64}$/;

// 浮点型 最多保留两位小数 一般用于金额
export const float = /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/;
