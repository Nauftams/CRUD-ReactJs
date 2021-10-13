import React from "react";
import { Table } from "react-bootstrap";

const Tabel = () => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Username</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default Tabel;
