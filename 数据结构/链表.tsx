//juejin.cn/post/7038386476630933541

// 链表对象化，便于理解
https: const obj = {
  data: 1,
  next: {
    data: 2,
    next: {
      data: 3,
      next: null,
    },
  },
};

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

//将链表转换为数组
const temp = [];
while (l1 !== null) {
  temp.push(l1.val);
  l1 = l1.next;
}

//将数组转换为链表
const head = new ListNode(temp[0]); //新的链表结构
let res = head;
for (let i = 1; i < temp.length; i++) {
  res.next = new ListNode(temp[i]);
  res = res.next;
}
