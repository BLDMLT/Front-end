// 蹈入 fs模块，操作文件

const fs = require('fs')


// fs.readFile(path, [options], callback) // 读文件
fs.readFile('./files/11.txt', 'utf8', function(err, dataStr) {
        if (err) {
            return console.log("文件读取失败" + err.message)
        }
        console.log('读取成功！ ' + dataStr)
    })
    //// fs.write(path, data[, options], callback) // 写文件
fs.writeFile('./1.txt', 'abcd', function(err, dataStr) {
    console.log(err) // 成功 err 为 null , 如果失败， err 为错误对象
})