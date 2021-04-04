const Router = require('express')
const typeController = require('../controllers/type.controller')
const checkRole = require('../middlewares/checkRole.middleware')
const router = new Router()

router.post('/', checkRole('ADMIN'), typeController.create)
router.get('/', typeController.getAll)

module.exports = router
