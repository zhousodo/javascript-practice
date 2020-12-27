/*
* js 中没有明确的类。只有实例化的对象，所以直接连接对象就可以 ，然后就可以继承对象的方法了
*JavaScript的原型链和Java的Class区别就在，它没有“Class”的概念，所有对象都是实例，所谓继承关系不过是把一个对象的原型指向另一个对象而已。
*
* */


// 原型对象:
var Student = {
    name: 'Robot',
    height: 1.2,
    run: function () {
        console.log(this.name + ' is running...');
    }
};

function createStudent(name) {
    // 基于Student原型创建一个新对象:
    var s = Object.create(Student);
    // 初始化新对象:
    s.name = name;
    return s;
}

var xiaoming = createStudent('小明');
xiaoming.run(); // 小明 is running...
console.log(xiaoming.__proto__ === Student); // true

//https://www.liaoxuefeng.com/wiki/1022910821149312/1023022043494624