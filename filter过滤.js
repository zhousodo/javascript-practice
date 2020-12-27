//filter也是一个常用的操作，它用于把Array的某些元素过滤掉，然后返回剩下的元素。

var arr =[1,3,3,5,6,7,8,9]
var r = arr.filter(function (x ){
    return x % 2 !=0
    // return x % 2 !=0
})
console.log(r)

var arr = ['A', '', 'B', null, undefined, 'C', '  '];
var r = arr.filter(function (s) {
    return s && s.trim(); // 注意：IE9以下的版本没有trim()方法
});
r; // ['A', 'B', 'C']
console.log(r)

//filter()接收的回调函数，其实可以有多个参数。通常我们仅使用第一个参数，表示Array的某个元素。
// 回调函数还可以接收另外两个参数，表示元素的位置和数组本身：

var arr = ['A', 'B', 'C'];
var r = arr.filter(function (element, index, self) {
    console.log(element); // 依次打印'A', 'B', 'C'
    console.log(index); // 依次打印0, 1, 2
    console.log(self); // self就是变量arr
    return true;
});

console.log(r)








