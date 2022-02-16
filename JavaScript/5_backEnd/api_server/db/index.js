// 导入 mysql module
const mysql = require('mysql')

// 创建对象
const db = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'admin123',
    database: 'my_db_01'
})

module.exports = db