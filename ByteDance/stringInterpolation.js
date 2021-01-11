var year = 3, pos = "前端";
let str = "我已经有${year}年${pos}开发经验了";
function replace(str){
    // 原理是通过正则匹配，替换原字符串中的变量
    return str.replace(/\$\{(\w+)\}/g,function(matched,key){
            console.log(key)  // arguments见下面
            return eval(key)
    })
}
console.log(replace(str));
