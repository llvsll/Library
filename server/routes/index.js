const Router = require('express')
const router = new Router()
const bookRouter = require('./bookRouter')
const sectionRouter = require('./sectionRouter')
const userRouter = require('./userRouter')

router.use('/user', userRouter)
router.use('/section', sectionRouter)
router.use('/book', bookRouter)


module.exports = router