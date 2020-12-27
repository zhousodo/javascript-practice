function* fib(max){
    var t,
        a= 0,
        b=1,
        n=0
    while(n<max){
        yield a
        //互换值需要前面加 符号
        ;[a , b] =[b,a+b]
        n ++
    }
    return b  ;
}

var f= fib(5)
console.log(f.next(),f.next(),f.next(),f.next(),f.next(),f.next())














