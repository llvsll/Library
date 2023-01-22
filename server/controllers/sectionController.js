const {Section} = require('../models/models')
const ApiError = require('../error/ApiError')


class SectionController{
    async create(req,res){
        const{name} = req.body
        const section = await Section.create({name})
        return res.json(section)
    }

    async getAll(req,res){
        const sections = await Section.findAll()
        return res.json(sections)
    }
}

module.exports = new SectionController()