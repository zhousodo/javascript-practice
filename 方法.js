var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var y = new Date().getFullYear();
        return y - this.birth;
    }
};


var x =xiaoming.age();
console.log(x);

// test 2
function getAge() {
    var y = new Date().getFullYear();
    return y - this.birth;
}

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
};
//单独调用函数getAge()怎么返回了NaN？请注意，我们已经进入到了JavaScript的一个大坑里。
//
// JavaScript的函数内部如果调用了this，那么这个this到底指向谁？
//
// 答案是，视情况而定！
//
// 如果以对象的方法形式调用，比如xiaoming.age()，该函数的this指向被调用的对象，也就是xiaoming，这是符合我们预期的。
//
// 如果单独调用函数，比如getAge()，此时，该函数的this指向全局对象，也就是window。
console.log(xiaoming.age()); // 25, 正常结果
console.log(getAge()); // NaN

// test 3
'use strict';
//结果又报错了！原因是this指针只在age方法的函数内指向xiaoming，
// 在函数内部定义的函数，this又指向undefined了！
// （在非strict模式下，它重新指向全局对象window！）
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - this.birth;
        }
        return getAgeFromBirth();
    }
};
console.log('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
console.log(xiaoming.age()); // Uncaught TypeError: Cannot read property 'birth' of undefined

//test 4
'use strict';

var xiaoming = {
    name: '小明',
    birth: 1990,
    age: function () {
        var that = this;  // 在方法内部一开始就捕获this
        function getAgeFromBirth() {
            var y = new Date().getFullYear();
            return y - that.birth; // 用that而不是this
        }
        return getAgeFromBirth();
    }
};

console.log(xiaoming.age()); // 25


//apply
//虽然在一个独立的函数调用中，根据是否是strict模式，this指向undefined或window，
// 不过，我们还是可以控制this的指向的！
//
// 要指定函数的this指向哪个对象，可以用函数本身的apply方法，
// 它接收两个参数，第一个参数就是需要绑定的this变量，第二个参数是Array，表示函数本身的参数。

function getAge(){
    var y = new Date().getFullYear()
    return y - this.birth
}
var xiaoming = {
    name: '小明',
    birth: 1990,
    age: getAge
}
console.log(xiaoming.age())
console.log(getAge.apply(xiaoming,[]))

//另一个与apply()类似的方法是call()，唯一区别是：
//
// apply()把参数打包成Array再传入；
//
// call()把参数按顺序传入。
console.log(Math.max.apply(null,[4,3,6]))
console.log(Math.max.call(null,4,5,6))






