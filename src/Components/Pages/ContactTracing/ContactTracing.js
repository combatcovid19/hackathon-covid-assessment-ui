import React, { Component } from 'react';
import { Form, Button, Col, ListGroup } from 'react-bootstrap';

class ContactTracing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [{name: "", email: ""}],
            description: "We have met a few times, I have Covid symptoms, recommending you to go through assessment"
        }
    }
    add = () => {
        this.setState({contacts: [...this.state.contacts, { name: "", email: "" }]})
    }
    remove = (e, indx) => {
        e.preventDefault();
        const contacts = this.state.contacts;
        contacts.splice(indx, 1);
        this.setState({contacts})
    }
    // handle input change
    handleInputChange = (e, index) => {
        const { name, value } = e.target;
        const contacts = [...this.state.contacts];
        contacts[index][name] = value;
        this.setState({contacts})
    };
    submitContactTracing = (e) => {
        
    }
    render() {
        return (
            <div className="row assement-page mb-5">
                
                <div class="col-sm-10 offset-sm-1">
                    <div className="caption flex-space-between">
                        <div className="formTitle">Contact Tracing</div>
                    </div>
                    <br></br>
                    <button className ="pull-right" onClick={this.add}>Add</button>
                    <Form onSubmit={this.submitContactTracing} noValidate>                                            
                        {
                            this.state.contacts.map((country, indx) => {
                                return (
                                    <Form.Row key={indx}>
                                        <Form.Group as={Col} md="4">
                                            <Form.Label>Name</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                value={country.name}
                                                placeholder="name"
                                                onChange={e => this.handleInputChange(e, indx)}
                                            />
                                        </Form.Group>
                                        <Form.Group as={Col} md="4">
                                            <Form.Label>Email</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="email"
                                                value={country.email}
                                                placeholder="Email"
                                                onChange={e => this.handleInputChange(e, indx)}
                                            />
                                        </Form.Group> 
                                        <div className="btn-box">
                                            {this.state.contacts.length !== 1 && <button
                                            className="mr10 mt-4"
                                            onClick={(e) => this.remove(e, indx)}>X</button>}
                                        </div> 
                                    </Form.Row>                                  

                                )
                            })
                        }
                        <Form.Row>
                            <Form.Group as={Col} md="6">
                                <Form.Label>Description</Form.Label>
                                <Form.Control
                                    as="textarea"
                                    rows="3"
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.tracingFormHandler}
                                    placeholder="description"
                                />
                            </Form.Group>
                        </Form.Row>
                        <Button className="float-right mb-4" type="submit">Submit</Button>
                    </Form>
                
                </div>
                
            </div>
        )
    }
}

export default ContactTracing;