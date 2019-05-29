import React, { Component } from "react";
import { Container }from 'reactstrap';

import "./App.scss";
import Header from "../../components/Header";

class App extends Component {
  render() {
    return(
      <div className="app-container">
        <div className="container">
          <Header />
        </div>
        <div className="container-fluid">
          <div className="background">
          </div>
        </div>
      </div>
     
      // <Container>
      //   <h1>Pex</h1>
      // </Container>
    );
  }
};

export default App;