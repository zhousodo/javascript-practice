var arr =[1,2,3,4,5]
function pow(x){
    return x *x
}
var x = arr.map(pow)
console.log(x)
// arr2 =['1','2','a','b','c']
arr2 =[1,3,4,5,6,7]
//arry 转为字符串 可以直接使用map
var z = arr2.map(String)

console.log(z)

//reduce 使用
//reduce()把结果继续和序列的下一个元素做累积计算
var  arr = [1,3,5,7,9]
x= arr.reduce(function (x,y ){
    return x +y
})
console.log(x)

//test 6
var arr4 = [1,3,5,7,9]
var a= function(x,y){
    return x*y
}
console.log(arr4.reduce(a))

// test 7
//1,3,5,7,9 ---> 13579
var x = arr.reduce(function (x,y){
    return x*10 +y
})
console.log(x)

// test8 string to int
var s = '1234'
var newarr =s.split("").map((x) => x*1)
x= newarr.reduce((x,y)=>x*10+y)
console.log(x)


//请把用户输入的不规范的英文名字，变为首字母大写，其他小写的规范名字。
// 输入：['adam', 'LISA', 'barT']，输出：['Adam', 'Lisa', 'Bart']。

function getNormalcase(s){
    var strs = ""
    strs =s[0].toUpperCase()
    for(let i=1; i<s.length; i++){
        strs += s[i].toLowerCase()
    }
    return strs
}
var test_string = "india"
console.log(getNormalcase(test_string))



