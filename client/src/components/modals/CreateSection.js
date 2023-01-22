import React from "react";
import { Form } from "react-bootstrap";
import Modal from "react-bootstrap/Modal"
import Button from "react-bootstrap/Button";

const CreateSection = ({show, onHide}) => {
    return(
        <Modal
        show={show}
        onHide={onHide}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add section
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form>
                <Form.Control
                    placeholder={"Enter name of section"}
                />
            </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={onHide}>Close</Button>
          <Button variant="outline-success" onClick={onHide}>Add</Button>
        </Modal.Footer>
      </Modal>
    )
}

export default CreateSection