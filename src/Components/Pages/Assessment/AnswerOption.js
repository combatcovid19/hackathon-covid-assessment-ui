import React from 'react';
import PropTypes from 'prop-types';
import { Form, Col, } from 'react-bootstrap';
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
              id={props.answerId}
              value={props.answerId}
              onChange={props.onAnswerSelected}
            />
        </Form.Group>
      </Form.Row>
    </li>
  );
}

AnswerOption.propTypes = {
  answerType: PropTypes.string.isRequired,
  answerContent: PropTypes.string.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default AnswerOption;
