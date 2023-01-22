import React from "react";
import SectionBar from "../components/SectionBar";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import BookList from "../components/BookList";

const Library = () => {
    return (
        <Container>
            <Row className="mt-5">
                <Col md={3}>
                    <SectionBar />
                </Col>
                <Col md={9}>
                    <BookList/>
                </Col>
            </Row>
        </Container>
    )
}

export default Library;