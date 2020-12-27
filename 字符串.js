// \ 可以作为转义符
var  value = 'I\'m ok'
var value2 = "I \'m \"ok\""
console.log(value)
console.log(value2)
// 进制转化  可以直接输入进制转换,  \x41 ==A
console.log('\x41')
// 把多个字符串连接起来
var name ="小明";
var  age = 20;
var message = "你好"+ name+"你的年龄"+age;
var messge2 = '"你好"+${name}+"年龄"+${age};'
// alert(messge,messge2)
console.log(messge2);
console.log(message);
var name2 =" 小明";
var  age2 = 20;
//这里是 不是 引号 是间隔符号
console.log(`${name2},${age2}`);
console.log(`${name}`)
// length
console.log(name.length)
// 大写
var  a = 'Hello'
console.log(a.toUpperCase())
//小写
console.log(a.toLowerCase())
//索引
console.log(a.indexOf('lo'))
//字符串区间
console.log(a.substring(0,2))
console.log(a.substring(4))
