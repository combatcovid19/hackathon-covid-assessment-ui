import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';
import { Link } from "react-router-dom";

function Result(props) {
  let risk = "high";
  let guidelineLink = '<button type="button" href="/guidelines" class="btn btn-link">Link</button>';
  let coronaCenterLink = '<button type="button" onClick={props.navigateToProvider} href="/providers" class="btn btn-link">Here</button>'
  let RecommendationText = `The ACT recommends staying home and follow ${guidelineLink}`;
  if(risk === "low") {
    RecommendationText = `The ACT recommends staying home and follow ${guidelineLink}`;
  } else if(risk === "medium") {
    RecommendationText = `The ACT recommends staying home and follow ${guidelineLink}`;
  } else if(risk === "high") {
    RecommendationText = `The ACT recommends follow the guidelines in the ${guidelineLink} provided and talk to doctor as soon as possible. Check the nearby corona center ${coronaCenterLink}`;
  }
  return (
      <div className="col-sm-8 offset-sm-1 form-container pd-top-bottom-30">
        {/* You prefer <strong>{props.quizResult}</strong>! */}
        <strong className="mt-2 mb-3">Assessment Result</strong>
        <p className="mt-2 mb-3">Your CQ(covid Quotient) is xx%</p>
        <p className="mt-2 mb-3">According to Assessment and contact Tracing(ACT) your current risk for having corona virus is: {risk}</p>
        <section>
          <Alert key="1" variant="secondary">Low</Alert>
          <Alert key="1" variant="secondary"> Medium</Alert>
          <Alert key="1" variant="danger"> High</Alert>
        </section>
        {/* <p dangerouslySetInnerHTML={{__html: RecommendationText}}></p> */}
        <p>The ACT recommends follow the guidelines in the</p>
        <button type="button" href="/guidelines" class="btn btn-link">Link</button>
        <p> provided and talk to doctor as soon as possible. Check the nearby corona center</p>
        <Link to="/provider">Here</Link>
      </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;