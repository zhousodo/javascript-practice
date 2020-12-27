var abs = function(x){
    if (x>0){
        return x
    }else
    {
        return -x
    }
}

console.log(abs(10))

// test 2
'use strict'

function foo(x){
    //JavaScript还有一个免费赠送的关键字arguments，
    // 它只在函数内部起作用，并且永远指向当前函数的调用者传入的所有参数。
    // arguments类似Array但它不是一个Array：
    console.log('x = ' +x )
    for (var i = 0; i <arguments.length;i++){
        console.log('arg '+ i + '='+ arguments[i] )
    }
}
foo(10,20,30)

//rest参数
//如果传入的参数连正常定义的参数都没填满，也不要紧，rest参数会接收一个空数组（注意不是undefined）。
function foo(a, b, ...rest) {
    console.log('a = ' + a);
    console.log('b = ' + b);
    console.log(rest);
}

foo(1, 2, 3, 4, 5);
// 结果:
// a = 1
// b = 2
// Array [ 3, 4, 5 ]


'use strict';

//虽然是strict模式，但语句var x = 'Hello, ' + y;
// 并不报错，原因是变量y在稍后申明了。
// 但是console.log显示Hello, undefined，说明变量y的值为undefined。
// 这正是因为JavaScript引擎自动提升了变量y的声明，但不会提升变量y的赋值。
function foo() {
    var x = 'Hello, ' + y;
    console.log(x);
    var y = 'Bob';
}

foo()

//全局作用域
'use strict';

var course = 'Learn JavaScript';
console.log(course); // 'Learn JavaScript'
// console.log(window.course); // 'Learn JavaScript'

//由于JavaScript的变量作用域实际上是函数内部，我们在for循环等语句块中是无法定义具有局部作用域的变量的：
'use strict';

function foo() {
    for (var i=0; i<100; i++) {
        //
    }
    i += 100; // 仍然可以引用变量i
    console.log(i)
}
foo()

'use strict';

//为了解决块级作用域，ES6引入了新的关键字let，用let替代var可以申明一个块级作用域的变量：
function foo() {
    var sum = 0;
    for (let i=0; i<100; i++) {
        sum += i;
    }
    // SyntaxError:
    // i += 1;
    // console.log(i)
}
foo()
// 常量 说明 const
const pi = 3.21
console.log(pi)

// 解构赋值
let [x, [y, z]] = ['hello', ['JavaScript', 'ES6']];
x; // 'hello'
y; // 'JavaScript'
z; // 'ES6'

