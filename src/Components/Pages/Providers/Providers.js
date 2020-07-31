import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import { inject, observer } from "mobx-react";
import {Row, Col} from "react-bootstrap";
import mapIcon from '../../../map-icon.png'
const AnyReactComponent = ({ text }) => <img src={mapIcon} alt={text} width="20" height="20"></img>;
const Providers = inject("stores")(observer(class Providers extends Component {
    constructor(props) {
        super(props);
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
                    {this.props.stores.AppStore.providerList.map(function(k) {
                        return <>
                        <Row>
                            <Col>
                                <div style={{ height: '30vh', width: '100%' }}>
                                    <GoogleMapReact
                                        bootstrapURLKeys={{ key: "AIzaSyCkBQMaeTtg6JlE7W8Tir2YVyMrcHSNb5Y" }}
                                        defaultCenter={{lat: parseInt(k.provider_Latitude), lng: parseInt(k.provider_Longitude)}}
                                        defaultZoom={10}
                                    >
                                        <AnyReactComponent
                                            lat= {parseInt(k.provider_Latitude)}
                                            lng={parseInt(k.provider_Longitude)}
                                            text="Here"
                                        />
                                    </GoogleMapReact>
                                </div>
                            </Col>
                            <Col>
                            <address>
                                <strong>Distance: {k.distance}</strong><br/>
                                <strong>{k.provider_Email_Id}</strong><br/>
                                {k.provider_Street_Address}<br/>
                                {k.provider_City_Name}, {k.provider_Pin_Zip_Code}<br/>
                                <abbr title="Phone">P:</abbr> {k.provider_Phone_Number1}
                            </address>
                            </Col>
                        </Row>
                        <hr className="mt-2 mb-3"/>
                        </>
                    })}
                
                </div>
            </div>
        )
    }
}))

export default Providers;
