
let arr = [1, 2, 3, 4, 6, 7]

/**
 * 参数：
 * filter接收一个callback
 *   item: 数组中当前正在处理的元素（必选）
 *   index: 正在处理的元素在数组中的索引（可选）
 *   array: 调用filter方法的数组本身（可选）
 * 
 * 返回值：
 *   一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组
 */
let newArr = arr.filter((item, index, array) => {
  console.log(array)
  console.log(index)
  return item > 3
})

console.log(newArr)