import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import TaskServic from "../services/TaskServic";
import client from "../services/client";
function Example({ funk }) {
  const [show, setShow] = useState(false);
  const [number, setNumber] = useState("");
  const [title, setTitle] = useState("");
  const [data, setData] = useState();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const reload = () => window.location.reload();

  function createData() {
    const res = client
      .service("documents")
      .create({ title, number })
      .then((responce) => console.log("responce", responce));

    console.log("responce value", res);
  }
  console.log("data", data);

  const createTable = () => {
    // TaskServic.createTask({
    //   title: title,
    //   number: number,
    // });
    // app.service("documents").create({
    //   text: "A message from a REST client",
    // });
    // console.log("client", app, "yasha");
    handleClose();
    funk();
  };

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
          <Button variant="primary" onClick={createData}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Example;
