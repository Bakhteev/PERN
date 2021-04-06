const { Basket, BasketDevice } = require('../models/models')
const ApiError = require('../error/api.error')

class BasketController {
  async create(req, res) {
    try {
      const { deviceId, userId } = req.body
      const basket = await Basket.findAll({ where: { userId } })
      console.log(basket)
      const basketDevice = await BasketDevice.create({
        basketId: 11,
        deviceId,
      })

      return res.json(basketDevice)
    } catch (e) {
      console.log(e)
    }

  }

  async getAll(req, res) {
    const basket = await Basket.findAll({ where: { userId: req.params.id } })
    const basketDevice = await BasketDevice.findAll({
      where: { basketId: basket.id },
    })
    res.json(basketDevice)
  }

  async deleteOne(req, res) {
    const { id } = req.body
    const basketDevice = await BasketDevice.destroy({ where: { id } })
    return res.json(basketDevice)
  }

  async deleteAll(req, res) {
    const { id } = req.body
    const basket = await Basket.findAll({ where: { userId: id } })
    const basketDevice = await BasketDevice.destroy({
      where: { basketId: basket.id },
    })
    return res.json(basketDevice)
  }
}

module.exports = new BasketController()
