import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

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
                <br></br>
                    <section>
                        <p>Nearby Laboratory:</p>
                        <br></br>
                        <div style={{ height: '30vh', width: '30%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyCkBQMaeTtg6JlE7W8Tir2YVyMrcHSNb5Y" }}
                                defaultCenter={this.state.center}
                                defaultZoom={10}
                            >
                            </GoogleMapReact>
                        </div>
                        <address>
                            <strong>Example Inc.</strong><br/>
                            1234 Example Street<br/>
                            India, Example 0987<br/>
                            <abbr title="Phone">P:</abbr> (123) 456-7890
                        </address>
                        <hr></hr>
                        <div style={{ height: '30vh', width: '30%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: "AIzaSyCkBQMaeTtg6JlE7W8Tir2YVyMrcHSNb5Y" }}
                                defaultCenter={this.state.center}
                                defaultZoom={10}
                            >
                            </GoogleMapReact>
                        </div>
                        <address>
                            <strong>Example Inc.</strong><br/>
                            1234 Example Street<br/>
                            India, Example 0987<br/>
                            <abbr title="Phone">P:</abbr> (123) 456-7890
                        </address>
                    </section>
                </div>
            </div>
        )
    }
}

export default Providers;