
// 1.递归
function formatDataTree(data) {
  let parents = data.filter(p => p.pid === 0)
  let children = data.filter(c => c.pid !== 0)
  
  dataToTree(parents, children)

  return parents

  // parents 和 children 都是数组[]
  function dataToTree(parents, children) {
    parents.map(p => {
      children.map((c, index) => {
        if(c.pid === p.id) {
          // 因为是引用类型，需先进行深拷贝
          let _children = JSON.parse(JSON.stringify(children))
          _children.splice(index, 1)
          dataToTree([c], _children)
          // 查看当前p中有没有children属性
          if(p.children) {
            p.children.push(c)
          } else {
            p.children = [c]
          }
        }
      })
    })
  }
}

let treeData = formatDataTree(data)
// console.log(treeData)

