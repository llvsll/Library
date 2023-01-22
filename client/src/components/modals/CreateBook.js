import React, { useContext } from "react";
import { Col, Dropdown, Form, Row } from "react-bootstrap";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button";
import { Context } from "../..";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";
import { useState } from "react";

const CreateBook = ({show, onHide}) => {
    const  {book} = useContext(Context)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info,{title: '', description: '', number: Date.now()}])
    }

    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }

    return(
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add book
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Dropdown>
                    <Dropdown.Toggle> 
                         Choose section
                    </Dropdown.Toggle>
                    <DropdownMenu>
                        {book.sections.map(section => 
                            <Dropdown.Item key={section.id}>
                               {section.name}
                            </Dropdown.Item>    
                        )}
                    </DropdownMenu>
                </Dropdown>
                <Form.Control
                    className="mt-3"
                    placeholder="Enter name of book"
                />
                <Form.Control
                    className="mt-3"
                    placeholder="Enter author name"
                    
                />
                <Form.Control
                    className="mt-3"
                    type="file"
                />
                <hr/>
                <Button  onClick={addInfo} variant="outline-dark">Add new description
                </Button>
                {
                    info.map(i => 
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control 
                                    placeholder="Add name of description"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control 
                                    placeholder="Add description"
                                />
                            </Col>
                            <Col md={4}>
                                <Button variant="outline-danger" onClick={() => removeInfo(i.number)}>Delete
                                </Button>
                            </Col>
                        </Row>    
                    )
                }
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Close</Button>
          <Button variant="outline-success" onClick={onHide}>Add</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default CreateBook