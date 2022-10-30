import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import TaskServic from "../services/TaskServic";
function Example({ funk, id }) {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState(null);
  const [title, setTitle] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updateTable = async () => {
    await TaskServic.updateTask(
      {
        title: title,
        number: number,
      },
      id
    );
    await handleClose();
    await funk();
  };

  console.log(number, title);
  return (
    <>
      <span onClick={handleShow}>
        <i
          onClick={handleShow}
          class="bx bxs-up-arrow-circle"
          style={{ color: "green", fontSize: "24px", cursor: "pointer" }}
        ></i>
      </span>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                value={number}
                onChange={(event) => setNumber(event.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={updateTable}>
            Close
          </Button>
          <Button variant="primary" onClick={updateTable}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
