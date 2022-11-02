import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import TaskServic from "../services/TaskServic";
import client from "../services/client";

function Example({ funk, id }) {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState("");
  const [title, setTitle] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const patchTable = async () => {
    if (number !== "" && title !== "") {
      await client
        .service("documents")
        .patch(id, { number, title })
        .then((responce) => console.log(responce));
    } else if (number !== "") {
      await client
        .service("documents")
        .patch(id, { number })
        .then((responce) => console.log(responce));
    } else if (title !== "") {
      await client
        .service("documents")
        .patch(id, { title })
        .then((responce) => console.log(responce));
    }

    await handleClose();
    await funk();
  };

  return (
    <>
      <span onClick={handleShow}>
        <i
          onClick={handleShow}
          class="bx bxs-up-arrow-circle"
          style={{ color: "blue", fontSize: "24px", cursor: "pointer" }}
        ></i>
      </span>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Patch modal</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Titile</Form.Label>
              <Form.Control
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Number</Form.Label>
              <Form.Control
                type="text"
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
          <Button variant="primary" onClick={patchTable}>
            Patch
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
