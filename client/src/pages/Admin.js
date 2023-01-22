import React, { useState } from "react";
import {Button, Container} from "react-bootstrap"
import CreateBook from "../components/modals/CreateBook";
import CreateSection from "../components/modals/CreateSection";


const Admin = () => {
    const [sectionVisible,setSectionVisible] = useState(false)
    const [bookVisible,setBookVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button onClick={() => setSectionVisible(true)} variant={"outline-dark"}     className="mt-4 p-2">Add Section</Button>
            <Button onClick={() => setBookVisible(true)} variant={"outline-dark"}     className="mt-4 p-2">Add Book</Button>
            <CreateSection show={sectionVisible} onHide={() => setSectionVisible(false)}/>
            <CreateBook show={bookVisible} onHide={() => setBookVisible(false)}/>
        </Container>
        
    )
}

export default Admin;