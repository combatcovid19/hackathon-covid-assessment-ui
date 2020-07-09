import React from 'react';
import PropTypes from 'prop-types';
import { Alert } from 'react-bootstrap';

function Result(props) {
  let risk = "high";
  let guidelineLink = '<button type="button" href="/guidelines" class="btn btn-link">Link</button>';
  let coronaCenterLink = '<button type="button" href="/providers" class="btn btn-link">Here</button>'
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
        <h3>Assessment Result</h3>
        <h2>Your CQ(covid Quotient) is xx%</h2>
        <p>According to Assessment and contact Tracing(ACT) your current risk for having corona virus is: {risk}</p>
        <section>
          <Alert key="1" variant="secondary">Low</Alert>
          <Alert key="1" variant="secondary"> Medium</Alert>
          <Alert key="1" variant="danger"> High</Alert>
        </section>
        <p dangerouslySetInnerHTML={{__html: RecommendationText}}></p>
      </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;