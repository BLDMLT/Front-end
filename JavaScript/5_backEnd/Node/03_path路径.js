const path = require("path");
const fs = require('fs')

// path.join() // 拼接
// path.basename() // 解析名字

const pathStr = path.join('/a', '/b/c', '../', './d', 'e.txt') // ../ 会跳过一层 c
console.log(pathStr)

fs.readFile(path.join(__dirname, '/成绩.txt'), 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败 ' + err.message)
    }
    console.log('OK')
})

const fname = path.basename(pathStr, '.html') // 移除扩展名
const fest = path.extname(pathStr) // 只显示扩展名
console.log(fname)
console.log(fest)