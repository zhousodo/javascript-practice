// null true 是可以赋值的
var arr = [1,2,3.14,"hello",null, true];
console.log(arr.length);
// 可以后续设置 length 的长度
arr.length =8
console.log(arr.length)
//索引 然后修改值
arr[1] ='aaa'
console.log(arr)
//index of
var arr1 = [10,20,'30','xyz']
//index of 中间如果输入的是 数值,找索引
console.log(arr1.indexOf(10))
//切片
var s =['a','b','c','d','e','f','g']
console.log(s.slice(0,3))
console.log(s.slice(3))
//如果 不复制的化 ， 就直接切完了， 相当于赋值数组了
console.log(s.slice())
cp = s.slice()
console.log(cp)
//是赋值，并不是直接应用指针
console.log(cp === s)
console.log(1===1)
console.log(1==true)
// console.log("1"==true)

// push pop 添加元素 删除元素
//返回arr 长度 但是a 已经被push 进去了
console.log(s.push("a"))
//返回 arr pop弹出的值
console.log(s.pop("a"))

//unshift shift  头部添加和删除元素
var x =[1,2,4,3]
//同上，只返回长度
console.log(arr.unshift('a','b'))
// 返回 被删除的第一个元素
console.log(arr.shift('a'))
//sort 排序 reverse
console.log(x.sort())
console.log(x.reverse())
//splice()方法是修改Array的“万能方法”，它可以从指定的索引开始删除若干元素，然后再从该位置添加若干元素：
var arr = ['Microsoft', 'Apple', 'Yahoo', 'AOL', 'Excite', 'Oracle'];
// 从2 开始 数3个元素
console.log(arr.splice(2, 3, 'Google', 'Facebook'));
console.log(arr)

var abc = ['a','b','c']
// 连接两个arr 返回一个新的arr
var added= abc.concat([1,2,3])
var added2 = abc.concat([1,2,[1,2,3]])
console.log(abc)
console.log(added2)
console.log(added)
// join 将当前的array 的每个元素都用指定字符传连接起来
var arr = ['a','b','c']
arr.join('--')
console.log(arr.join('--'))

//
var arr = [[1, 2, 3], [400, 500, 600], '-'];
console.log(arr[1][2])





// https://www.liaoxuefeng.com/wiki/1022910821149312/1023020967732032

















