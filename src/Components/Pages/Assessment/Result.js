import React from 'react';
import PropTypes from 'prop-types';
import {Alert} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Result(props) {
  let risk = "high";
  let guidelineLink = '<button type="button" href="/guidelines" class="btn btn-link">Link</button>';
  let coronaCenterLink = '<button type="button" onClick={props.navigateToProvider} href="/providers" class="btn btn-link">Here</button>'
  let RecommendationText = `The ACT recommends staying home and follow ${guidelineLink}`;
  if (risk === "low") {
    RecommendationText = `The ACT recommends staying home and follow ${guidelineLink}`;
  } else if (risk === "medium") {
    RecommendationText = `The ACT recommends staying home and follow ${guidelineLink}`;
  } else if (risk === "high") {
    RecommendationText = `The ACT recommends follow the guidelines in the ${guidelineLink} provided and talk to doctor as soon as possible. Check the nearby corona center ${coronaCenterLink}`;
  }
  return (
    <div className="col-sm-8 offset-sm-1 form-container pd-top-bottom-30">
      {/* You prefer <strong>{props.quizResult}</strong>! */}
      <strong className="mt-2 mb-3">Assessment Result</strong>
      <p className="mt-2 mb-3">Your CQ(covid Quotient) is xx%</p>
      <p className="mt-2 mb-3">According to Assessment and contact Tracing(ACT) your current risk for having corona
        virus is: <span className="textHighLight" style={{textTransform:'uppercase'}}>{risk}</span></p>
      <section className="row">
        <div className="col-sm-4 form-container">
          <Alert key="1" variant="primary" className="textWhite text-center">Low</Alert>
        </div>
        <div className="col-sm-4 form-container">
          <Alert key="1" variant="secondary" className="textWhite text-center"> Medium</Alert>
        </div>
        <div className="col-sm-4 form-container">
          <Alert key="1" variant="danger" className="textWhite text-center"> High</Alert>
        </div>
      </section>
      {/* <p dangerouslySetInnerHTML={{__html: RecommendationText}}></p> */}
      <p>The ACT recommends follow the guidelines in the  <Link to="/guidelines">Link</Link></p>
      <p> provided and talk to doctor as soon as possible. Check the nearby corona center <Link to="/provider">Here</Link></p>
    </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.bool.isRequired
};

export default Result;
