import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-date-picker';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import StateList from "./StateList";
import { Form, Button, Col, } from 'react-bootstrap';

import Row from 'react-bootstrap/Row';

function Profile(props) {
    const f = props.profile;
    
  return (
    <div className="col-sm-8 offset-sm-2 form-container pd-top-bottom-30">
      <Form noValidate onSubmit={props.submitProfileDetail}>
        <Form.Row>
          <Form.Group as={Col} sm="6">
            <Form.Control
              type="text"
              name="fname"
              value={f.fname}
              onChange={props.profileFormHandler}
              placeholder="Enter First Name"
              noValidate
            />
            {props.errors.fname.length > 0 && 
              <span className='error'>{props.errors.fname}</span>}
          </Form.Group>
          <Form.Group as={Col} sm="6">
            <Form.Control
              type="text"
              name="lname"
              value={f.lname}
              onChange={props.profileFormHandler}
              placeholder="Enter Last Name"
              noValidate
            />
            {props.errors.lname.length > 0 && 
              <span className='error'>{props.errors.lname}</span>}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} sm="6">
          <Form.Row>
        
          <Form.Group as={Col} sm="9">
            <DatePicker
              name="dob"
              onChange={props.dobHandler}
              value={f.dob}
              maxDate= {new Date("1/1/2019")}
              minDate= {new Date("1/1/1910")}
              noValidate
            />
            {props.errors.dob.length > 0 && 
              <span className='error'>{props.errors.dob}</span>}
          </Form.Group>
          <Form.Group as={Col} sm="3" className="flex-v-align-center">
            <Form.Label>AGE:  <strong>{f.age}</strong></Form.Label>
            
          </Form.Group>
          </Form.Row>
        
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Row>
            <Form.Label as="legend" column sm={2}>
              Gender<span>*</span>
            </Form.Label>
            <Col sm={10} name="gender" onChange={props.profileFormHandler} className="flex-space-evenly-horizontal mr-top-10">
              <Form.Check
                type="radio"
                label="Male"
                name="gender"
                value="male"
                id="custom-inline-1"
              />
              <Form.Check
                type="radio"
                label="Female"
                name="gender"
                value="female"
                id="custom-inline-2"
              />
              <Form.Check
                type="radio"
                label="Other"
                name="gender"
                value="other"
                id="custom-inline-3"
              />
            </Col>
            </Form.Row>
          </Form.Group>
          <Form.Group as={Col} md="6">
              <Form.Control
                type="email"
                name="email"
                value={f.email}
                onChange={props.profileFormHandler}
                placeholder="Enter Email"                  
              />
              {props.errors.email.length > 0 && 
              <span className='error'>{props.errors.email}</span>}
          </Form.Group>
          <Form.Group as={Col} md="6">
            <PhoneInput
              placeholder="Enter phone number"
              name="mobile"
              value={f.mobile}
              onChange={props.mobileHandler}
              />
              {/* <Form.Control
                type="tel"
                name="mobile"
                value={f.mobile}
                onChange={props.profileFormHandler}
                placeholder="Enter Mobile"                  
              /> */}
              {props.errors.mobile.length > 0 && 
              <span className='error'>{props.errors.mobile}</span>}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          
          <Form.Group as={Col} md="6">
            <PhoneInput
              placeholder="Enter whatsApp Number"
              name="whatsAppNumber"
              value={f.whatsAppNumber}
              onChange={props.whatsappHandler}
              />
              {/* <Form.Control
                type="tel"
                name="whatsAppNumber"
                value={f.whatsAppNumber}
                onChange={props.profileFormHandler}
                placeholder="Enter WhatsApp Number"                  
              /> */}
              {props.errors.whatsAppNumber.length > 0 && 
              <span className='error'>{props.errors.whatsAppNumber}</span>}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="12" controlId="formGridState">
              <Form.Control as="select" name="country" value={f.country} onChange={props.handleCountryChange} noValidate>
                  <option selected value="">Select Country</option>
                  <option value="India">India</option>
                  <option value="USA">USA</option>
                  <option value="Canada">Canada</option>
              </Form.Control>              
            {props.errors.country.length > 0 && 
              <span className='error'>{props.errors.country}</span>}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6">
            <Form.Label>State<span>*</span></Form.Label>
            <Form.Control as="select" name="state" value={f.state} onChange={props.profileFormHandler} noValidate>
              <StateList data={f.statesList}/>
            </Form.Control>
              {props.errors.state.length > 0 && 
                <span className='error'>{props.errors.state}</span>}
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
            <Form.Label>City<span>*</span></Form.Label>
            <Form.Control
              type="text"
              placeholder="city"
              name="city"
              value={f.city}
              onChange={props.profileFormHandler}
            />
            {props.errors.city.length > 0 && 
              <span className='error'>{props.errors.city}</span>}
          </Form.Group>
          <Form.Group as={Col} md="6">
            <Form.Label>Street<span>*</span></Form.Label>
            <Form.Control
              type="text"
              placeholder="street"
              name="street"
              value={f.street}
              onChange={props.profileFormHandler}
            />
            {props.errors.street.length > 0 && 
              <span className='error'>{props.errors.street}</span>}
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6">
            <Form.Label>Zip Code<span>*</span></Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter ZipCode"
              name="zipCode"
              value={f.zipCode}
              onChange={props.profileFormHandler}
            />
            {props.errors.zipCode.length > 0 && 
              <span className='error'>{props.errors.zipCode}</span>}
          </Form.Group>
        </Form.Row>
        <Button className="float-right" type="submit">Start Assessment</Button>
    </Form>
    </div>
  )
}

// Profile.propTypes = {
//   content: PropTypes.string.isRequired
// };

export default Profile;
