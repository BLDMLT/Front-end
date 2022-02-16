const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer()

server.on('request', (req, res) => {
    // 获取url
    const url = req.url
        // 印社路径
    const fpath = path.join(__dirname, url)

    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        if (err) return res.end("404 Not Find!")

        res.end(dataStr)
    })
})

server.listen(80, () => {
    console.log("server running at http://127.0.0.1")
})