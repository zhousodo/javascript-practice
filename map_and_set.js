var m = new Map([['Michael', 95], ['Bob', 75], ['Tracy', 85]]);
console.log(m.get("Michael"))
// 初始化map
var m = new Map()
m.set('admin',30)
m.set('user',40)
//判断是否有用户
console.log(m.has('user'))
// 得到对应的键值
console.log(m.get('user'))
// 删除 key
console.log(m.delete('admin'))
console.log(m.get('admin'))
// 重新赋值会冲掉前面所赋值

var s1 =new Set()
var s2 = new Set([1,2,3])
var s3 = new  Set([1,2,3,'3'])
console.log(s2, s3 )
// 不可以添加重复的内容
s2.add('9')
s2.add('9')
console.log(s2)
console.log(s2.delete('9'))



