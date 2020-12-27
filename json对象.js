'use strict';

var xiaoming = {
    name: '小明',
    age: 14,
    gender: true,
    height: 1.65,
    grade: null,
    'middle-school': '\"W3C\" Middle School',
    skills: ['JavaScript', 'Java', 'Python', 'Lisp']
};
// var s =JSON.stringify(xiaoming,null,' ')
// console.log(s)
// console.log('aaaaaaaaaaaaaaaaaaaaaa')

// 没有办法转换大小写
function convert(key, value) {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value;
}
var ss=JSON.stringify('xiaoming',convert,'  ')
console.log(ss)







