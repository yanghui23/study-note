
// splice 方法通过删除、替换现有元素或原地添加新的元素来修改数组,并以数组形式返回被修改的内容
// 此方法会改变原数组

const months = ['Jan', 'March', 'April', 'June']

months.splice(1, 0, 'Feb') // inserts at index 1
console.log(months)  // Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May') // replaces 1 element at index 4
console.log(months) // Array ["Jan", "Feb", "March", "April", "May"]
