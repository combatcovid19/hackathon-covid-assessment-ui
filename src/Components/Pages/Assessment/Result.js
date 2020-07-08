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
      <div>
        {/* You prefer <strong>{props.quizResult}</strong>! */}
        <h3>Assessment Result</h3>
        <h2>Your CQ(covid Quotient) is xx%</h2>
        <p>According to Assessment and contact Tracing(ACT) your current risk for having corona virus is: {risk}</p>
        <section>
          <Alert key="1" variant="success">Low</Alert>
          <Alert key="1" variant="warning"> Medium</Alert>
          <Alert key="1" variant="danger"> High</Alert>
        </section>
        <p dangerouslySetInnerHTML={{__html: RecommendationText}}></p>
        {/* <section>
          <strong>Recommendations</strong>
          <p>Follow Social distancing measures.</p>
          <p>Follow personal and respiratory hygiene.</p>
          <p>Be watchful for any symptoms like fever, dry cough, sore throat, shortness of breath and re-take this test.</p>
          <p>Avoid touching your face, eyes, and mouth</p>
          <p>Eat Healthy and maintain adequate Immunity</p>
        </section>
        <section>
          <strong>Nearby Laboratory</strong>
          <address>
            <strong>Example Inc.</strong><br/>
            1234 Example Street<br/>
            India, Example 0987<br/>
            <abbr title="Phone">P:</abbr> (123) 456-7890
          </address>
          <address>
            <strong>Example Inc.</strong><br/>
            1234 Example Street<br/>
            India, Example 0987<br/>
            <abbr title="Phone">P:</abbr> (123) 456-7890
          </address>
        </section> */}
      </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;