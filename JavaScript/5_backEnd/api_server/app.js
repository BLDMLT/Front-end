// 导入 express module
const express = require('express')
    //  创建express的服务器实例
const app = express()

// 导入cors
const cors = require('cors')
const joi = require('joi')
app.use(cors())
    // 配置解析表单数据 只解析，applicataion/x-www-form-urlencoded 格式的表单数据 -> 中间件
app.use(express.urlencoded({ extended: false }))
    // 路由之前，封装res.cc 函数
app.use((req, res, next) => {
    // staus 默认为1 表示失败，err可能是错误对象，也可能是错误字符串
    res.cc = function(err, status = 1) {
        res.send({
            status,
            message: err instanceof Error ? err.message : err,
        })
    }
    next()
})

// 导入并使用用户路由
const userRouter = require('./router/user')
app.use('/api', userRouter)
    //定义错误级别的中间件
app.use((err, req, res, next) => {
    // 验证失败的错误
    if (err instanceof joi.ValidationError) return res.cc(err)
    res.cc(err)
})


// 启动服务器
app.listen(3007, () => {
    console.log('api server running at http://127.0.0.1:3007')
})