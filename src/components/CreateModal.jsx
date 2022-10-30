import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import TaskServic from "../services/TaskServic";
function Example({ funk }) {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(null);
  const [title, setTitle] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const reload = () => window.location.reload();
  const createTable = async () => {
    await TaskServic.createTask({
      title: title,
      number: number,
    });
    await handleClose();
    await funk();
  };

  console.log(number, title);
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Create table
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                value={number}
                onChange={(event) => setNumber(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={createTable}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
