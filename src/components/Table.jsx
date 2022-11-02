import Table from "react-bootstrap/Table";
import Example from "./CreateModal";
import UpdateModal from "./UpdateModal";
import PatchModal from "./PatchModel";
import { useEffect, useState } from "react";
// import TaskServic from "../services/TaskServic";
import client from "../services/client";
function TableTask() {
  const [data, setData] = useState([]);
  const [up, setUp] = useState(true);
  useEffect(() => {
    const getData = () => {
      let res = client
        .service("documents")
        .find()
        .then((res) => setData(res.data));
      console.log("res", res);
    };
    getData();
  }, [up]);

  console.log("datatest", data);

  const deleteTask = (id) => {
    client
      .service("documents")
      .remove(id)
      .then((res) => {
        setData((item) => item.filter((it) => it._id !== id));
      });
  };
  console.log(data);
  const upFunc = () => {
    setUp(!up);
  };
  return (
    <>
      <div style={{ textAlign: "right" }}>
        <Example funk={upFunc} />
      </div>

      <Table striped>
        <thead>
          <tr>
            <th>_ID</th>
            <th>Title</th>
            <th>Number</th>
            <th>Del</th>
            <th>Update</th>
            <th>Patch</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((item, i) => (
            <tr id={i}>
              <td>{(i += 1)}</td>
              <td>{item.title}</td>
              <td>{item.number}</td>
              <td onClick={() => deleteTask(item._id)}>
                <span style={{ cursor: "pointer" }}>
                  <i
                    className="bx bx-x-circle"
                    style={{
                      color: "red",
                      fontSize: "24px",
                      cursor: "pointer",
                    }}
                  ></i>
                </span>
              </td>
              <td>
                <UpdateModal funk={upFunc} id={item._id} />
              </td>
              <td>
                <PatchModal funk={upFunc} id={item._id} />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default TableTask;
