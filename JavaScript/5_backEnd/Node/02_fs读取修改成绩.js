const fs = require('fs')
console.log(__dirname) // 路径拼接问题解决方法
fs.readFile(__dirname + '/成绩.txt', 'utf8', function(err, dataStr) {
    if (err) {
        return console.log('读取文件失败 ' + err.message)
    }
    const arrOld = dataStr.split(' ')
    console.log(arrOld)
    const arrNew = []
    arrOld.forEach(item => {
        arrNew.push(item.replace('=', ':'))
    })
    const newStr = arrNew.join('\r\n')
    console.log(newStr)
    fs.writeFile('./成绩-OK.txt', newStr, function(err) {
        if (err) {
            return console.log("写入失败 " + err.message)
        }
        console.log("成绩写入成功！")
    })
})