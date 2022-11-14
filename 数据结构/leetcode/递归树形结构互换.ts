/**
 * 生成树形结构
 */

const getTree = (arr, tree = arr.filter((d) => d.parentId === -1)) => {
  tree.forEach((item) => {
    item.children = arr.filter((h) => h.parentId === item.id);
    if (item.children.length) {
      getTree(arr, item.children);
    }
  });
  return tree;
};

const temp = [
  {
    id: 7,
    parentId: -1,
    name: "工作空间",
  },
  {
    id: 8,
    parentId: -1,
    name: "系统管理",
  },
  {
    id: 9,
    parentId: 7,
    name: "设置中心",
  },
  {
    id: 10,
    parentId: 9,
    name: "用户中心",
  },
];

const result = [
  {
    id: 7,
    parentId: -1,
    name: "工作空间",
    children: [
      {
        id: 9,
        parentId: 7,
        name: "设置中心",
        children: [
          {
            id: 10,
            parentId: 9,
            name: "用户中心",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    parentId: -1,
    name: "系统管理",
  },
];

/**
 * 平铺树结构
 */

/**
 * 直接使用api
 */
const treeFlat = (tree = []) => {
  return tree.flat(10);
};

/**
 * 手写
 */
const treeFlat = (tree = [], result = []) => {
  tree.forEach((node) => {
    if (Array.isArray(node.children) && node.children.length) {
      const temp = JSON.parse(JSON.stringify(node));
      delete temp.children;
      result.push(temp);
      treeFlat(node.children, result);
    } else {
      delete node.children;
      result.push(node);
    }
  });
  return result;
};
