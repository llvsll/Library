import React, { useContext } from "react";
import { Row } from "react-bootstrap";
import BookItem from "./BookItem";
import { observer } from "mobx-react-lite";
import { Context } from "..";

const BookList = observer(  () => {
    const {book} = useContext(Context)
    return (
       <Row className="d-flex" >
            {book.books.map(book => 
                <BookItem key={book.id} book={book}/>
            )}
       </Row>
    )
})

export default BookList