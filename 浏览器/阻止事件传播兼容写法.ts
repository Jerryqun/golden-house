/**
 * 阻止冒泡事件
 */

function stopPropagation(e) {
  if (typeof e.stopPropagation === "function") {
    e.stopPropagation();
  } else {
    // 兼容ie
    e.cancelBubble = true;
  }
}

/**
 * 阻止冒泡事件
 */

function preventDefault(e) {
  if (typeof e.preventDefault === "function") {
    e.preventDefault();
  } else {
    // 兼容ie
    e.returnValue = false;
  }
}
