// 1. 导入 http 模块
const http = require('http')
const { type } = require('os')
    // 2. 创建web服务器实例
const server = http.createServer()
    // 3. 绑定request事件，监听客户端
server.on('request', (req, res) => {
    // 获取url地址
    const url = req.url
        // 默认404
    let content = '<h1>404 Not found!</h1>'
        // 判断用户是否首页
        // 判断是否about
    if (url === '/' || url === '/index.html') {
        content = '<h1>首页</h1>'
    }
    if (url === '/about.html') {
        content = '<h1>关于页面</h1>'
    }
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.end(content)
        // 设置content-type
        // 使用res.end（）
})
server.listen(80, () => {
    console.log("add")
})