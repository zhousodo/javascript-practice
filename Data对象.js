var now= new Date();
//Data可以获取所有和日期时间相关的内容
console.log(now.getFullYear())
// 注意 月份是0-11

// 如果 使用的parse 函数，则正常传入1-12 就可以

// 使用Date.parse()时传入的字符串使用实际月份01~12，转换为Date对象后getMonth()获取的月份值为0~11。 
var d = new Date(1435146562875)
console.log(d.getMonth())















