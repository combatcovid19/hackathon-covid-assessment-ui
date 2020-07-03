import React from 'react';
import PropTypes from 'prop-types';

function Result(props) {
  return (
      <div>
        {/* You prefer <strong>{props.quizResult}</strong>! */}
        <h3>You are in Risk</h3>
        <section>
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
        </section>
      </div>
  );
}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;