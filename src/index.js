import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "mobx-react";
import Container from 'react-bootstrap/Container';
import './index.scss';
import App from './App';
import Header from "./Components/organisms/Header/Header.js";
import Footer from "./Components/organisms/Footer/Footer.js";
import * as serviceWorker from './serviceWorker';
import stores from "./stores";
import {Row, Col} from "react-bootstrap";


ReactDOM.render(
    <Provider stores={stores}>

        <Container fluid>
            <Header/>
            <Container>
                <Row className="banner-text">
                    <Col>
                        <h2>COVID-19 ASSESSMENT</h2>
                        <h4>This is a COVID-19 symptoms assessment form.</h4>
                        <h4>Provide the required information for self assessment related to COVID-19.</h4>
                    </Col>
                </Row>
                <App/>
                <Row>
                    <Footer/>
                </Row>
            </Container>
        </Container>
    </Provider>,
    document.getElementById('root')
);
serviceWorker.unregister();
