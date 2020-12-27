var arr = ['Apple', 'pear', 'orange'];
// every()函数
console.log(arr.every(function (s) {
    return s.length > 0;
}));
// find 查找函数
console.log(arr.find(function (s){
    return s.toLowerCase() === s
}))
// findindex
console.log(arr.findIndex(function (s){
    return s.toLowerCase() === s
}))
//forEach()和map()类似，它也把每个元素依次作用于传入的函数，但不会返回新的数组。
// forEach()常用于遍历数组，因此，传入的函数不需要返回值：
arr.forEach(console.log)

// 闭包使用
//https://www.liaoxuefeng.com/wiki/1022910821149312/1023021250770016

function sum(arr) {
    return arr.reduce(function (x,y) {
        return x+y
    })
}

x =sum([1,3,4,5])
console.log(x)

function sum2(arr) {
    var sum =  function(){
    return arr.reduce(function (x,y) {
        return x+y
    })
    }
    return sum
}
y = sum2([1,2,3,4,5])
// 直接调用sum2 返回值是求和函数,  只有调用具体函数是才可以返回真正的计算和
console.log(y,y())
console.log('--------------')
function count() {
    var arr = []
    for (var i = 1; i <=3 ;i++){
        arr.push(function (n){
            return i * i
        })
    }
    return arr
}
//全部都是16！原因就在于返回的函数引用了变量i，但它并非立刻执行。
// 等到3个函数都返回时，它们所引用的变量i已经变成了4，因此最终结果为16。
// 返回闭包时牢记的一点就是：返回函数不要引用任何循环变量，或者后续会发生变化的变量
var  result =count()
var f1 =result[0]
var f2 =result[1]
var f3 =result[2]

console.log(f1(),f2(),f3())

// console.log(count(f1,f2,f3))

function count2() {
    var arr = []
    for (var i = 1; i <= 3; i++) {
        arr.push((function (n) {
            return function(){
                return n * n
            }

        })(i))
    }
    return arr
}
var  result1 =count()
var f11 =result1[0]
var f21 =result1[1]
var f31 =result1[2]

console.log("f11",f11(),"f21",f21(),"f31",f31())
function count() {
    var arr = [];
    for (var i=1; i<=3; i++) {
        arr.push((function (n) {
            return function () {
                return n * n;
            }
        })(i));
    }
    return arr;
}

var results = count();
var f1 = results[0];
var f2 = results[1];
var f3 = results[2];
console.log(f1(), f2(), f3());

//#################
'use strict'
function creat_counter(initial) {
    var x = initial||0
    return{
        inc : function(){
            x+=1
            return x
        }
    }
}
var cl =  creat_counter()
cl.inc()


