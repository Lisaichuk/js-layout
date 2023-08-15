// Підключаємо роутер до бек-енду
const express = require('express')
const router = express.Router()

// Підключіть файли роутів
const layout = require('./layout')
// Підключіть інші файли роутів, якщо є
const community = require('./community')

// Об'єднайте файли роутів за потреби
router.use('/', layout)
// Використовуйте інші файли роутів, якщо є
router.use('/community', community)

// Експортуємо глобальний роутер
module.exports = router
