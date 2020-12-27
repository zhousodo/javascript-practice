var x= ['Google', 'Apple', 'Microsoft'].sort(); // ['Apple', 'Google', 'Microsoft'];
console.log(x)
// 这是因为Array的sort()方法默认把所有元素先转换为String再排序，结果'10'排在了'2'的前面，因为字符'1'比字符'2'的ASCII码小。
var y=     [10, 20, 1, 2].sort(); // [1, 10, 2, 20]
console.log(y)

// test 1
var arr = [10, 20, 1, 2];
var  z= arr.sort(function (x, y) {
    if (x < y) {
        return 1;
    }
    if (x > y) {
        return -1;
    }
    return 0;
}); // [20, 10, 2, 1]

console.log(z )
