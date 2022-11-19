/**
 * Record
 * Record<Keys， Type>
 * 构造一个对象类型，Keys 表示对象的属性键 、Type 表示对象的属性值，用于将一种类型属性映射到另一种类型
 */

type studentScore = { [name: string]: number };

type studentScore = Record<string, number>;

/**
 * Record 类型使用场景
 * 限制属性名称
 */
type roles = "tester" | "developer" | "manager";
const staffCount: Record<roles, number> = {
  tester: 10,
  developer: 20,
  manager: 1,
};

/**
 * Record类型 和 keyof 组合
 */

interface Staff {
  name: string;
  salary: number;
}

type StaffJson = Record<keyof Staff, string>;

const product: StaffJson = {
  name: "John",
  salary: "3000",
};
