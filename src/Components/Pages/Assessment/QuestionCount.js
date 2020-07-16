import React from 'react';
import PropTypes from 'prop-types';

function QuestionCount(props) {
  return (
    <p className="questionCount">
      Question <span className="textHighLight">{props.counter}</span> of <span className="textHighLight">{props.total}</span>
    </p>
  );
}

QuestionCount.propTypes = {
  counter: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default QuestionCount;
