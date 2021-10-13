import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavbar from "./component/navbar/Navbar";
import Tabel from "./component/tabel/Tabel";
import "./App.css";
import Form from "./component/form/Form";

class App extends Component {
  render() {
    return (
      <div>
        <TopNavbar />
        <div className="container mt-4">
          <Tabel className="mt-3" />
          <Form />
        </div>
      </div>
    );
  }
}

export default App;
