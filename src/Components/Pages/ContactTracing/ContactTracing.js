import React, { Component } from 'react';
import { Form, Button, Col } from 'react-bootstrap';

class ContactTracing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [{name: "", email: ""}],
            name: "",
            email: "",
            description: "We have met a few times, I have Covid symptoms, recommending you to go through assessment"
        }
    }
    add = () => {
        this.setState({contacts: [...this.state.contacts, ""]})
    }
    tracingFormHandler = (e) => {

    }
    submitContactTracing = (e) => {
        
    }
    render() {
        return (
            <div>
                <h3>Contact Tracing</h3>
                
                <button onClick={this.add}>Add</button>
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
                                            value={this.state.name}
                                            placeholder="name"
                                            onChange={this.tracingFormHandler}
                                        />
                                    </Form.Group>
                                    <Form.Group as={Col} md="4">
                                        <Form.Label>Email</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="email"
                                            value={this.state.email}
                                            placeholder="Email"
                                            onChange={this.tracingFormHandler}
                                        />
                                    </Form.Group>  
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
                    <Button className="float-right" type="submit">Submit</Button>
                </Form>
                
            </div>
        )
    }
}

export default ContactTracing;