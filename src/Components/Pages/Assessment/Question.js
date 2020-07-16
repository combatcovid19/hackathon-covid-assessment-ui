import React from 'react';
import PropTypes from 'prop-types';

function Question(props) {
  return <strong className="question f14">{props.content}</strong>;
}

Question.propTypes = {
  content: PropTypes.string.isRequired
};

export default Question;
