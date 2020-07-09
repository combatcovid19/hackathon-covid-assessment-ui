import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import stores from "./stores";

ReactDOM.render(
  <Provider stores={stores}>
    
    <Container fluid>
    <header>
        <h1 className="offset-md-1">
          AACT COVID-19
        </h1>
      </header>
      <Container>
      <Row className="justify-content-md-center banner-text">
        <h2>This is a Covid symptoms assessment tool.</h2>
        <h4>Provide the required information for self-assessment related to Covid.</h4>
      </Row>
        <App />
      <Row>
        <footer></footer>
      </Row>
      </Container>
    </Container>
  </Provider>,
  document.getElementById('root')
);
serviceWorker.unregister();
