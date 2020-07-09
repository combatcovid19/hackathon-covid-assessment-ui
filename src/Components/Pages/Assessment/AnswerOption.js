import React from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col, } from 'react-bootstrap';
function AnswerOption(props) {
  return (
    <li className="answerOption">
      <Form.Row>
        <Form.Group as={Col} md="6">
          <Form.Check
              type="radio"
              className="radioCustomButton"
              name="radioGroup"
              label={props.answerContent}
              checked={props.answerType === props.answer}
              id={props.answerType}
              value={props.answerType}
              disabled={props.answer}
              onChange={props.onAnswerSelected}
            />
        </Form.Group>
      </Form.Row>
      {/* <label className="radioCustomLabel" htmlFor={props.answerType}>
      <input
        type="radio"
        className="radioCustomButton"
        name="radioGroup"
        checked={props.answerType === props.answer}
        id={props.answerType}
        value={props.answerType}
        disabled={props.answer}
        onChange={props.onAnswerSelected}
      />
      <span>{props.answerContent}</span>
      </label> */}
    </li>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
