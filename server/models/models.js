const sequelize = require('../db')
const {DataType, DataTypes} = require('sequelize')

const User = sequelize.define('user',{ 
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    email:{type: DataTypes.STRING, unique: true,},
    password:{type: DataTypes.STRING,},
    role:{type: DataTypes.STRING, defaultValue: "USER"},
})

const User_library = sequelize.define('user_library',{ 
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Library_book = sequelize.define('library_book',{ 
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Book = sequelize.define('book',{ 
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: false, allowNull: false},
    author: {type: DataTypes.STRING, unique: false, allowNull: false},
    img: {type: DataTypes.STRING, allowNull: false},
})

const Section = sequelize.define('section',{ 
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
})

const Book_info = sequelize.define('book_info',{ 
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    title: {type: DataTypes.STRING,  allowNull: false},
    description: {type: DataTypes.STRING, allowNull: false},
})

User.hasOne(User_library)
User_library.belongsTo(User)

User_library.hasMany(Library_book)
Library_book.belongsTo(User_library)

Section.hasMany(Book)
Book.belongsTo(Section)

Book.hasMany(Library_book)
Library_book.belongsTo(Book)

Book.hasMany(Book_info, {as: 'info'})
Book_info.belongsTo(Book)

module.exports = {
    User, 
    User_library,
    Library_book,
    Book,
    Section,
    Book_info 
}

