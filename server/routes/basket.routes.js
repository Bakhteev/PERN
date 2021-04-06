const Router = require('express')
const basketController = require('../controllers/basket.controller')
const router = new Router()

router.post('/', basketController.create)
router.get('/:id', basketController.getAll)
router.delete('/', basketController.deleteOne)
router.delete('/', basketController.deleteAll)

module.exports = router
