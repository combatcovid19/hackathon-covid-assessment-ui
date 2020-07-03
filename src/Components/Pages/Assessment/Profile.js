import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col, InputGroup } from 'react-bootstrap';

function Profile(props) {
    const f = props.profile;
  return (
    <Form noValidate onSubmit={props.submitProfileDetail}>
          <Form.Row>
            <Form.Group as={Col} md="12" controlId="formGridState">
                <Form.Label>Please Select Country:</Form.Label>
                <Form.Control as="select" name="country" onChange={props.handleCountryChange}>
                    <option selected>Select Country</option>
                    <option value="India">India</option>
                    <option value="USA">USA</option>
                    <option value="Canada">Canada</option>
                </Form.Control>
            </Form.Group>
          </Form.Row>          
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={f.name}
                onChange={props.profileFormHandler}
                placeholder="Enter Name"
              />
            </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormik01">
              <Form.Label as="legend" column sm={2}>
                Gender
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                  type="radio"
                  label="Male"
                  name="gender"
                  id="custom-inline-1"
                />
                <Form.Check
                  type="radio"
                  label="Female"
                  name="gender"
                  id="custom-inline-2"
                />
                <Form.Check
                  type="radio"
                  label="Other"
                  name="gender"
                  id="custom-inline-3"
                />
              </Col>
            </Form.Group>            
            
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="validationFormik02">
                <Form.Label>DOB</Form.Label>
                <Form.Control
                  type="date"
                  name="dob"
                  value={f.dob}
                  onChange={props.profileFormHandler}
                  placeholder="Enter DOB"
                />
              </Form.Group>
            <Form.Group as={Col} md="6" controlId="validationFormikUsername">
                <Form.Label>Mobile</Form.Label>
                  <Form.Control
                    type="tel"
                    name="mobile"
                    value={f.mobile}
                    onChange={props.profileFormHandler}
                    placeholder="Enter Mobile"                  
                  />
              </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>Street</Form.Label>
              <Form.Control
                type="text"
                placeholder="Street"
                name="street"
                value={f.street}
                onChange={props.profileFormHandler}
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>County</Form.Label>
              <Form.Control
                type="text"
                placeholder="County"
                name="county"
                value={f.county}
                onChange={props.profileFormHandler}
              />
            </Form.Group>
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="City"
                name="city"
                value={f.city}
                onChange={props.profileFormHandler}
              />
            </Form.Group>
            <Form.Group as={Col} md="6">
              <Form.Label>State</Form.Label>
              <Form.Control
                type="text"
                placeholder="State"
                name="state"
                value={f.state}
                onChange={props.profileFormHandler}
              />
            </Form.Group>            
          </Form.Row>
          <Form.Row>
            <Form.Group as={Col} md="6">
                <Form.Label>Zip</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Zip"
                  name="zip"
                  value={f.zip}
                  onChange={props.profileFormHandler}
                />

              </Form.Group>
              <Form.Group as={Col} md="6">
                <Form.Label>Country Code</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Country Code"
                  name="countryCode"
                  value={f.countryCode}
                  onChange={props.profileFormHandler}
                />

              </Form.Group>
          </Form.Row>
          <Button className="float-right" type="submit">Start Assessment</Button>
        </Form>
  )
}

// Profile.propTypes = {
//   content: PropTypes.string.isRequired
// };

export default Profile;
