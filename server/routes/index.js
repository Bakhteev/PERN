const Router = require('express')

const userRouter = require('./user.routes')
const deviceRouter = require('./device.routes')
const typeRouter = require('./type.routes')
const brandRouter = require('./brand.routes')

const router = new Router()

router.use('/user', userRouter)
router.use('/device', deviceRouter)
router.use('/type', typeRouter)
router.use('/brand', brandRouter)

module.exports = router
