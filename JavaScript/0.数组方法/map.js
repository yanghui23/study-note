
let arr = [2, 4, 6, 8, 10]

/**
 * 参数：
 * map接收一个callback
 *   item: 数组中当前正在处理的元素（必选）
 *   index: 正在处理的元素在数组中的索引（可选）
 *   array: 调用map方法的数组本身（可选）
 * 返回值：
 *   一个由原数组每个元素执行回调函数的结果组成的新数组
 */
let newArr = arr.map((item, index, array) => {
  console.log(index)
  console.log(array)
  return item * 2
})

let newArr2 = arr.map(item => {
  return item > 5  
}) 

console.log(newArr) // [ 4, 8, 12, 16, 20 ]
console.log(newArr2) // [ false, false, true, true, true ]