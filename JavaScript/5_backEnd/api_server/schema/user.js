// 导入验证规则包
const joi = require('joi')
const express = require('express')

// 定义规则

const username = joi.string().alphanum().min(1).max(10).required()
const password = joi.string().pattern(/^[\S]{6,12}$/).required()

// 定义验证规则对象
exports.reg_login_schema = {
    body: {
        username,
        password,
    }
}