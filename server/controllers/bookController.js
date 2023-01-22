const uuid = require('uuid')
const path = require('path')
const {Book, Book_info} = require('../models/models')
const ApiError = require('../error/ApiError')


class BookController{
    async create(req,res, next){
        try{
            const {name, author, sectionId, info} = req.body
            const {img} = req.files
            let fileName = uuid.v4() + ".jpg"
            img.mv(path.resolve(__dirname, '..', 'static', fileName))
            const book = await Book.create({name, author, sectionId, img: fileName})


            if(info) {
                info = JSON.parse(info)
                info.forEach(i => 
                    Book_info.create({
                        title: i.title,
                        description: i.description,
                        bookId: book.id
                    })
                    )
            } 

            return res.json(book)
        }catch (e){
            next(ApiError.badRequest(e.message))
        }

        
    }

    async getAll(req,res){
        let {sectionId, limit, page} = req.query
        page = page || 1
        limit = limit || 9
        let offset = page * limit - limit
        let books
        if(!sectionId){
            books = await Book.findAndCountAll({limit, offset})
        }
        if(sectionId){
            books = await Book.findAndCountAll({where: {sectionId}, limit, offset}) 
        }
        return res.json(books)
    }

    async getOne(req,res){
        const {id} = req.params
        const book = await Book.findOne(
            {
            where: {id},
            include: [{model: Book_info, as: 'info'}]
            },
        )  
        return res.json(book)
    }
}

module.exports = new BookController()