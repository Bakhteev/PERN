const { Brand } = require('../models/models')
const ApiError = require('../error/api.error')

class BrandController {
  async create(req, res) {
    const { name } = req.body
    const brand = await Brand.create({
      name,
    })
    return res.json(brand)
  }

  async getAll(req, res) {
    const brand = await Brand.findAll()
    res.json(brand)
  }
}

module.exports = new BrandController()
