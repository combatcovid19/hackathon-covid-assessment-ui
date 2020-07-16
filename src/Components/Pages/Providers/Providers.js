import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import {Row, Col} from "react-bootstrap";
import './style.css'
class Providers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            center: {
                lat: 59.95,
                lng: 30.33
            }
        }
    }
    render() {
        return (
            <div className="row assement-page mb-5">
                <div className="col-sm-10 offset-sm-1">
                <div className="caption flex-space-between">
                    <div className="formTitle">Provider list</div>
                </div>
                <Row>
                    <Col>
                        <p className="mt-2 mb-3">Nearby Laboratory:</p>
                    </Col>
                </Row>
                    <Row>
                        <Col>
                            <div style={{ height: '30vh', width: '100%' }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "AIzaSyCkBQMaeTtg6JlE7W8Tir2YVyMrcHSNb5Y" }}
                                    defaultCenter={this.state.center}
                                    defaultZoom={10}
                                >
                                </GoogleMapReact>
                            </div>
                        </Col>
                        <Col>
                        <address>
                            <strong>Example Inc.</strong><br/>
                            1234 Example Street<br/>
                            India, Example 0987<br/>
                            <abbr title="Phone">P:</abbr> (123) 456-7890
                        </address>
                        </Col>
                    </Row>
                    <hr className="mt-2 mb-3"/>
                    <Row>
                        <Col>
                            <div style={{ height: '30vh', width: '100%' }}>
                                <GoogleMapReact
                                    bootstrapURLKeys={{ key: "AIzaSyCkBQMaeTtg6JlE7W8Tir2YVyMrcHSNb5Y" }}
                                    defaultCenter={this.state.center}
                                    defaultZoom={10}
                                >
                                </GoogleMapReact>
                            </div>
                        </Col>
                        <Col>
                            <address>
                                <strong>Example Inc.</strong><br/>
                                1234 Example Street<br/>
                                India, Example 0987<br/>
                                <abbr title="Phone">P:</abbr> (123) 456-7890
                            </address>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
}

export default Providers;
