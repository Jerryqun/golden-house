/**
 * 给你一个二叉树的根节点 root ， 检查它是否轴对称。
 * 思路
 * 对称是对比两颗树
 * a树的左子树必须等于b树的右子树
 */

const isSameTree = (root) => {
  const check = (a, b) => {
    return (
      (a == null && b == null) ||
      (!(a == null || b == null) &&
        a.val == b.val &&
        check(a.left, b.right) &&
        check(a.right, b.left))
    );
  };
  return root === null || check(root.left, root.right);
};
