import React from "react";
import {Container, Col, Image, Row, Button, Card} from "react-bootstrap";


const BookPage = () => {
    const book = {id:1, name: 'Witcher', author: 'Stephen King', img: 'https://purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'}
    const description = [
        {id:1, title: "Language", description: "English"},
        {id:2, title: "Year", description: 2077}
    ]
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4} >
                    <Image width={300} height={300} src={book.img} />
                </Col>
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around" style={{width: 300, height: 300, marginLeft: 100, border: "5px solid white"}}>
                         <Row >
                        <h2 style={{fontSize: 64}} >{book.name}</h2>
                    </Row>
                    </Card>
                   
                </Col>
                <Col md={4}>
                    <Card className="d-flex flex-column align-items-center justify-content-around " style={{width: 300, height: 300, marginLeft: 160, border: "5px solid white"}}>
                        <Button  style={{width: 200, height: 64}} variant={"outline-dark"}>Add to library</Button>
                    </Card>
                    
                 </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Descriptions</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>    
                )}
            </Row>
        </Container>
    )
}

export default BookPage;