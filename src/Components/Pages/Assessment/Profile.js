import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-date-picker';
import StateList from "./StateList";
import { Form, Button, Col, InputGroup } from 'react-bootstrap';

function Profile(props) {
    const f = props.profile;
  return (
    <Form noValidate onSubmit={props.submitProfileDetail}>
        <h4>This is a Covid symptoms assessment tool.</h4>
        <h4>Provide the required information for self-assessment related to Covid.</h4>
        <strong>Enter Profile information:</strong>
        <Form.Row>
          <Form.Group as={Col} md="6">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              name="fname"
              value={f.fname}
              onChange={props.profileFormHandler}
              placeholder="Enter First Name"
            />
            {props.errors.fname.length > 0 && 
              <span className='error'>{props.errors.fname}</span>}
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>Last Name</Form.Label>
            <Form.Control
              type="text"
              name="lname"
              value={f.lname}
              onChange={props.profileFormHandler}
              placeholder="Enter Last Name"
            />
            {props.errors.lname.length > 0 && 
              <span className='error'>{props.errors.lname}</span>}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6">
            <Form.Label>DOB</Form.Label>
            <DatePicker
              name="dob"
              onChange={props.dobHandler}
              value={f.dob}
              maxDate= {new Date("1/1/2019")}
              minDate= {new Date("1/1/1910")}
              className="col-md-6"
            />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>AGE</Form.Label>
            <strong>{f.age}</strong>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="validationFormik01">
            <Form.Label as="legend" column sm={2}>
              Gender
            </Form.Label>
            <Col md={6}>
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
          <Form.Group as={Col} md="6">
            <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={f.email}
                onChange={props.profileFormHandler}
                placeholder="Enter Email"                  
              />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6">
            <Form.Label>Mobile Nmber</Form.Label>
              <Form.Control
                type="tel"
                name="mobile"
                value={f.mobile}
                onChange={props.profileFormHandler}
                placeholder="Enter Mobile"                  
              />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>WhatsApp Number</Form.Label>
              <Form.Control
                type="tel"
                name="whatsAppNumber"
                value={f.whatsAppNumber}
                onChange={props.profileFormHandler}
                placeholder="Enter WhatsApp Number"                  
              />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="formGridState">
              <Form.Label>Please Select Country:</Form.Label>
              <Form.Control as="select" name="country" value={f.country} onChange={props.handleCountryChange} required>
                  <option selected>Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
              </Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" name="state" value={f.state} onChange={props.handleStateChange} required>
              <StateList data={f.statesList}/>
            </Form.Control>
          </Form.Group>
          {f.country === "India" ? <Form.Group as={Col} md="6">
            <Form.Label>District</Form.Label>
            <Form.Control
              type="text"
              placeholder="district"
              name="district"
              value={f.district}
              onChange={props.profileFormHandler}
            />
          </Form.Group> :
          <Form.Group as={Col} md="6">
            <Form.Label>County</Form.Label>
            <Form.Control
              type="text"
              placeholder="county"
              name="county"
              value={f.county}
              onChange={props.profileFormHandler}
            />
          </Form.Group>}     
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="city"
              name="city"
              value={f.city}
              onChange={props.profileFormHandler}
            />
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="street"
              name="street"
              value={f.street}
              onChange={props.profileFormHandler}
            />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6">
            <Form.Label>Zip Code</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ZipCode"
              name="zipCode"
              value={f.zipCode}
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
