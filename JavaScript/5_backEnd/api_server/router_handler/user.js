// 导入 mysql
const db = require('../db/index')
    // 导入 bcryptjs 这个包
const bcrypt = require('bcryptjs')
const express = require('express')

// 注册新用户
exports.regUser = (req, res) => {
    // 获取客户端提交的表单数据
    const userinfo = req.body
        // if (!userinfo.username || !userinfo.password) { // 是否为空
        //     // return res.send({ status: 1, message: '用户名或者密码不能为空' })
        //     res.cc('用户名或者密码不能为空')
        // }
        // 定义 sql 用户名是否被占用
    const sqlStr = 'select * from ev_users where username= ?'
    db.query(sqlStr, userinfo.username, (err, results) => {
        //执行sql 语句失败
        if (err) {
            // return res.send({ status: 1, message: err.message + '1' })
            return res.cc(err)
        }
        // 用户名是否占用
        if (results.length > 0) {
            // console.log(results.length)
            // return res.send({ status: 1, message: '用户名或者密码不能为空' })
            return res.cc('用户名已使用，请更换用户名')
        }
        // TODO:用户名
        // 调用 bcrypt。hashSync()对密码加密
        userinfo.password = bcrypt.hashSync(userinfo.password, 10)
            //定义插入新用户sql
        const sql = 'insert into ev_users set ?'
            // 调用 db.query
        db.query(sql, { username: userinfo.username, password: userinfo.password }, (err, results) => {
            // 判断sql是否成功
            // if (err) return res.send({ status: 1, message: err.message + '2' })
            if (err) return res.cc(err)
            if (results.affectedRows !== 1) {
                // console.log(results.length)
                // return res.send({ status: 1, message: '注册失败，请稍后再试' })
                return res.cc('注册失败，请稍后再试')
            }
            // res.send({ status: 0, message: '注册成功' })

            res.cc('注册成功', 0)

        })
    })



    // res.send('reguser OK')
}

// 登录

exports.login = (req, res) => {
    // 接收表单数据
    const userinfo = req.body
        // 定义SQL
    const sql = 'select * from ev_users where username=?'
        // 执行SQL，根据用户名查询表单数据
    db.query(sql, userinfo.username, (err, results) => {
        // 执行失败
        if (err) return res.cc(err)
            // 执行成功但是条数不为1
        if (results.length !== 1) return res.cc('登录失败')

        // TODO： 判断密码是否正确
        res.send('login OK')
    })

}