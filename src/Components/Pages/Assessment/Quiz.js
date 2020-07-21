import React from 'react';
import PropTypes from 'prop-types';
import Question from './Question';
import QuestionCount from './QuestionCount';
import AnswerOption from './AnswerOption';

function Quiz(props) {
  function renderAnswerOptions(key) {
    return (
      <AnswerOption
        key={key.answerId}
        answerContent={key.answerDescription}
        answerId={key.answerId}
        onAnswerSelected={props.onAnswerSelected}
      />
    );
  }

  return (
    <div key={props.questionCount} className="col-sm-10 offset-sm-1 form-container">
      { props.question ? <QuestionCount counter={props.questionCount} total={props.questionTotal} /> : "" }
      <Question className="pd-top-bottom-30" content={props.question} />
      <ul className="answerOptions pd-top-bottom-30">
        {props.answerOptions.map(renderAnswerOptions)}
      </ul>
    </div>
  );
}

Quiz.propTypes = {
  answerOptions: PropTypes.array.isRequired,
  question: PropTypes.string.isRequired,
  questionCount: PropTypes.number.isRequired,
  questionTotal: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired
};

export default Quiz;
