
const oldObj = {
  name: '湖人',
  createTime: 1947,
  player: ['勒布朗詹姆斯', '安东尼戴维斯', '凯尔库兹马'],
  otherInfo: {
    boss: '珍妮巴斯',
    coach: '沃格尔'
  }
}

// 浅拷贝
// const newObj = oldObj
// newObj.name = '湖人队'
// console.log('oldObj', oldObj)
// console.log('newObj', newObj)



// 深拷贝
function deepClone(obj = {}) {
  // 如果obj不是一个对象或为null，直接返回
  if(typeof obj !== 'object' || obj === null) {
    return obj
  }
  let target
  if(obj instanceof Array) {
    target = []
  } else {
    target = {}
  }
  for(let prop in obj) {
    // 只拷贝obj自己有的属性，不拷贝原型链上继承的属性
    if(obj.hasOwnProperty(prop)) {
      target[prop] = deepClone(obj[prop])
    }
  }
  return target
}

let newObj = deepClone(oldObj)
newObj.otherInfo.boss = '巴斯'
console.log('oldObj:', oldObj)
console.log('newObj:', newObj)


// json对象实现深拷贝的另一种方法
let newObj2 = JSON.parse(JSON.stringify(oldObj))

