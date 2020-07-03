import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "mobx-react";
import { BrowserRouter as Router } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import stores from "./stores";

ReactDOM.render(
    <Provider stores={ stores }>
        <Container>
          <App />
        </Container>
    </Provider> ,
  document.getElementById('root')
);
serviceWorker.unregister();
