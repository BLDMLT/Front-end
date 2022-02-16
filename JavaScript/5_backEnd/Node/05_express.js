const express = require('express')
    // 创建web服务器
const app = express()

// 4. 监听GET和POST并响应
app.get('/user', (req, res) => {
    // 调用res.send 响应json对象
    res.send({ name: "zs", age: 20, gender: "男" })
})
app.post('/user', (req, res) => {
    res.send('请求成功')
})
app.get('/', (req, res) => {
        // 通常是空对象
        console.log(req.query)
        res.send(req.query)
    })
    // ： 动态参数， ： 后为参数名称
app.get('/user/:id', (req, res) => {
    // req.params 是动态匹配到的url参数，默认空对象, 
    res.send(req.params)
})

// 启动服务器
app.listen(80, () => {
    console.log('express server running at 127.0.0.1')
})