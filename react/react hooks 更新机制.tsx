import { useState, useEffect } from "react";
export default () => {
  const [obj, setObj] = useState([4]);
  useEffect(() => {
    const c = [...obj]; // 3 引用地址变化 触发更新
    // const c = JSON.parse(JSON.stringify(obj)); // 3 引用地址变化 触发更新
    // const c = obj; // 1 引用地址没变 不会触发更新
    c.push(1);
    c.push(2);

    console.log(c);
    setObj(c);
  }, []);
  return <div>{obj.length}</div>;
};
