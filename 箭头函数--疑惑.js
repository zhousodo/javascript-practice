var fn = x =>x+x
console.log(fn)
x=>{
    if (x>0){
        return x+x
    }else{
        return -x*x
    }
}
// 多个参数需要括号
(x,y) => x+x +y+y
// 无参数
// () =>3.14

//可变参数
// (x,y ,...rest )=>{
// var i,sum = x+y
// for(i=0;i<rest.length;i++){
//     sum+=rest[i]
// }
// return sum
// }









