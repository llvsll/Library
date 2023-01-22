import {makeAutoObservable} from 'mobx'

export default class BookStore{
    constructor(){
        this._sections = [
            {id: 1, name: 'Horrors'},
            {id: 2, name: 'Dramas'},
            {id: 3, name: 'Fantasy'},
            {id: 5, name: 'Detective'}
        ]
        this._books = [
            {id:1, name: 'It', author: 'Stephen King', img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id:2, name: 'Withcer', author: 'Andrzej Sapkowski', img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id:6, name: 'Withcer 2', author: 'Andrzej Sapkowskii', img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id:10, name: 'Withcer 3', author: 'Andrzej Sapkowsk', img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
        ]
        this._selectedSection = {}
        makeAutoObservable(this)
    }

    setSection(sections){
        this._sections = sections
    }
    setBooks(books){
        this._books = books
    }
    setSelectedSection(section){
        this._selectedSection = section
    }

    get sections(){
        return this._sections
    }
    get books(){
        return this._books
    }
    get selectedSection(){
        return this._selectedSection
    }

}