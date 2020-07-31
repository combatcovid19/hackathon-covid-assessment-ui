import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Result(props) {
  let risk = "";
  let variant = {low: "dark", medium: "dark", high: "dark"};
  if (props.assessmentScore <= 40) {
    risk = "Low";
    variant.low = "danger";
  } else if (props.assessmentScore > 40 && props.assessmentScore <= 60) {
    risk = "Medium";
    variant.medium = "danger";
  } else if (props.assessmentScore > 60) {
    risk = "High";
    variant.high = "danger";
  }
  return (
    <div className="col-sm-8 offset-sm-1 form-container pd-top-bottom-30">
      <strong className="mt-2 mb-3">Assessment Result</strong>
      <p className="mt-2 mb-3">Your CQ(covid Quotient) is: <b>{props.assessmentScore}</b></p>
      <p className="mt-2 mb-3">Based on assessment answers, the risk of having corona virus is: 
        <span className="textHighLight" style={{textTransform:'uppercase'}}> {risk}</span></p>
      <section className="row">
        <div className="col-sm-4 form-container">
          <Alert key="1" variant={variant.low } className="textWhite text-center">Low</Alert>
        </div>
        <div className="col-sm-4 form-container">
          <Alert key="1" variant={variant.medium } className="textWhite text-center"> Medium</Alert>
        </div>
        <div className="col-sm-4 form-container">
          <Alert key="1" variant={variant.high } className="textWhite text-center"> High</Alert>
        </div>
      </section>
      <p>The ACT recommends to follow the guidelines in the provider <Link to="/guidelines">Link</Link></p>
      {risk !== "Low" && <p> and talk to doctor as soon as possible. Check the nearby corona center <Link to="/provider">Here</Link></p>}
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.bool.isRequired
};

export default Result;
