import React, { Component } from 'react';
import quizQuestions from './quizQuestions';
import Quiz from './Quiz';
import Profile from './Profile';
import Result from './Result';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '',
      country: "default",
      isProfileShow: true,
      profile: {
        name: "",
        gender: "",
        mobile: "",
        dob: "",
        street: "",
        county: "",
        city: "",
        state: "",
        zip: "",
        countryCode: ""      
      },
      errors: {
        name: '',
        email: '',
        password: '',
      }
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  // country select action.
  handleCountryChange = (event) => {
    const selectedCountry = event.target.value;
    this.setState({
      country: selectedCountry
    });
    
    setTimeout(() => console.log("#1###", this.state), 300);
  }
  profileFormHandler = e => {
    let profile = {...this.state.profile};
    let errors = this.state.errors;
    const { name, value } = e.target;
    profile[name] = value;
    switch (name) {
      case 'name': 
        errors.name = 
          value.length < 5
            ? 'Name must be at least 5 characters long!'
            : '';
        break;
      default:
        break;
    }
    this.setState({ 
      profile,
      errors
    });
    
}
submitProfileDetail = (e) => {
  e.preventDefault();
  const selectedCountry = this.state.country;
  this.setState({
    question: quizQuestions[selectedCountry][0].question,
    answerOptions: quizQuestions[selectedCountry][0].answers,
    counter: 0,
    answersCount: 0,
    questionId: 1,
    isProfileShow: false
  });
  setTimeout(() => console.log("#1submit call", this.state), 300);
}

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions[this.state.country].length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      setTimeout(() => this.setResults(this.getResults()), 300);
    }
  }

  setUserAnswer(answer) {
    this.setState((state, props) => ({
      answersCount: {
        ...state.answersCount,
        [answer]: (state.answersCount[answer] || 0) + 1
      },
      answer: answer
    }));
  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionId = this.state.questionId + 1;

    this.setState({
      counter: counter,
      questionId: questionId,
      question: quizQuestions[this.state.country][counter].question,
      answerOptions: quizQuestions[this.state.country][counter].answers,
      answer: ''
    });
  }

  getResults() {
    const answersCount = this.state.answersCount;
    const answersCountKeys = Object.keys(answersCount);
    const answersCountValues = answersCountKeys.map(key => answersCount[key]);
    const maxAnswerCount = Math.max.apply(null, answersCountValues);

    return answersCountKeys.filter(key => answersCount[key] === maxAnswerCount);
  }

  setResults(result) {
    if (result.length === 1) {
      this.setState({ result: result[0] });
    } else {
      this.setState({ result: 'Undetermined' });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions[this.state.country].length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }
  renderProfileForm() {
    return (
      <Profile
        profile = {this.state.profile}
        errors = {this.state.errors}
        handleCountryChange= {this.handleCountryChange}
        profileFormHandler = {this.profileFormHandler}
        submitProfileDetail = {this.submitProfileDetail}
      />

    )
  }

  renderResult() {
    return(
      <Result quizResult={this.state.result} />
    )
  }

  render() {
    return (
      <section id="assessment-page">
        <section className="l-content">
          <strong>Self Assessment:</strong>          
          {this.state.isProfileShow ? this.renderProfileForm() : ""}
          {this.state.result ? this.renderResult() : this.renderQuiz()}
        </section>
        {/* <section className="r-content">
          
        </section> */}
      </section>
    );
  }
}

export default App;
