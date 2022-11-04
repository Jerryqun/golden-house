/**
 * 1、必须采用顺序存储结构。
 * 2、必须按关键字大小有序排列。
 */

/**
 * 查找过程
 * 首先，假设表中元素是按升序排列，将表中间位置记录的关键字与查找关键字比较，
 * 如果两者相等，则查找成功；否则利用中间位置记录将表分成前、后两个子表，
 * 如果中间位置记录的关键字大于查找关键字，则进一步查找前一子表，否则进一步查找后一子表。
 * 重复以上过程，直到找到满足条件的记录，使查找成功，或直到子表不存在为止，此时查找不成功。
 */

function binarysearch(arr, target) {
    if (Object.prototype.toString.apply(arr) !== '[object Array]') {
        return -1
    }
    let l = 0, r = arr.length - 1, m
    while (l <= r) {
        m = Math.floor((l + r) / 2)
        if (arr[m] === target) return m;
        if (arr[m] > target) {
            r = m - 1
        } else {
            l = m + 1
        }
    }
    return -1
}