const Router = require('express')
const userController = require('../controllers/user.controller')
const AuthMiddleware = require('../middlewares/auth.middleware')

const router = new Router()

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/auth', AuthMiddleware, userController.check)

module.exports = router
