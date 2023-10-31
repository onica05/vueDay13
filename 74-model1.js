// 对应74-ES6模块化基本语法.html这个文件
let aa = 10;
let c= 30;
let b =20;
function show(){
    console.log('是show函数打印输出的文字');
}

// 最终会发现没有b，是因为没有暴露出去外界是访问不到的
// 暴露导出文件
export {
    aa
   
}