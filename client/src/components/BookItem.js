import React from "react";
import { Card, Col } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useNavigate} from "react-router-dom"
import { BOOK_ROUTE } from "../utils/consts";

const BookItem = ({book}) => {
    const history = useNavigate()
    return ( 
        <Col md={3} className={"mt-3"} onClick={() => history(BOOK_ROUTE + '/' + book.id)}>
            <Card style={{width : 150, cursor: 'pointer'}} border={'light'}>
                <Image width={150} height={150} src={book.img}/>
                <div className="d-flex justify-content-between align-items-center mt-1">
                    <div>
                        {book.name}
                    </div>
                </div>
            </Card>
        </Col>
    )
}

export default BookItem