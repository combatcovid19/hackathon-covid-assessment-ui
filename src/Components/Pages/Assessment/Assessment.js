import React, { Component } from 'react';
import quizQuestions from './quizQuestions';
import states from './states';
import Quiz from './Quiz';
import Profile from './Profile';
import Result from './Result';
// import { axios } from 'axios';
import { validateForm, calculateAge, formValidation } from "../../../util/utilityFunction";

class Assessment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Profile Details",
      counter: 0,
      questionId: 1,
      question: '',
      answerOptions: [],
      answer: '',
      answersCount: {},
      result: '',
      isProfileShow: true,
      profile: {
        fname: "",
        lname: "",
        dob: "",
        age: 0,
        gender: "",
        email: "",
        mobile: "",
        whatsAppNumber: "",
        country: "default",
        state: "",
        statesList: [],
        district: "",
        county: "",
        city: "",
        street: "",
        zipCode: ""
      },
      errors: {
        fname: '',
        lname: '',
        dob: '',
        email: '',
        mobile: '',
        whatsAppNumber: '',
        country: '',
        state: '',
        city: '',
        street: '',
        zipCode: ''
      }
    };

    this.handleAnswerSelected = this.handleAnswerSelected.bind(this);
  }

  // componentDidMount() {
  //   axios.all([
  //     axios.get('/country'),
  //     axios.get('/gender')
  //   ])
  //   .then(response => {
  //     console.log('Country List: ', response[0]);
  //     console.log('Gender List: ', response[1]);
  //   });
  // }

  // country select action.
  handleCountryChange = (event) => {
    let profile = { ...this.state.profile };
    profile.country = event.target.value;
    if (profile.country) {
      profile.statesList = states[profile.country];
      this.setState({
        profile
      });
    }

    setTimeout(() => console.log("#1###", profile.statesList), 300);
  }

  dobHandler = (dob) => {
    let profile = { ...this.state.profile };
    profile.dob = dob;
    formValidation(profile, this.state.errors);
    const age = calculateAge(dob);
    profile.age = age;

    this.setState({
      profile
    });
  }

  mobileHandler = (e) => {
    let profile = { ...this.state.profile };
    let errors = this.state.errors;
    profile["mobile"] = e;
    formValidation(profile, errors);
    this.setState({
      profile,
      errors
    });
  }
  whatsappHandler = (e) => {
    let profile = { ...this.state.profile };
    let errors = this.state.errors;
    profile["whatsAppNumber"] = e;
    formValidation(profile, errors);
    this.setState({
      profile,
      errors
    });
  }
  profileFormHandler = e => {
    let profile = { ...this.state.profile };
    let errors = this.state.errors;
    const { name, value } = e.target;
    profile[name] = value;
    formValidation(profile, errors);

    this.setState({
      profile,
      errors
    });

  }
  submitProfileDetail = (e) => {
    e.preventDefault();
    let profile = { ...this.state.profile };
    let errors = this.state.errors;
    formValidation(profile, errors);
    // if (validateForm(this.state.errors)) {
      console.info('Valid Form')
      const selectedCountry = profile.country;
      this.setState({
        question: quizQuestions[selectedCountry][0].question,
        answerOptions: quizQuestions[selectedCountry][0].answers,
        counter: 0,
        answersCount: 0,
        questionId: 1,
        isProfileShow: false,
        title: "Questionaries"
      });
    // } else {
    //   console.error('Invalid Form', this.state.errors)
    //   this.setState({
    //     profile,
    //     errors
    //   });
    // }

    setTimeout(() => console.log("#1submit call", this.state), 300);
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionId < quizQuestions[this.state.profile.country].length) {
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
      question: quizQuestions[this.state.profile.country][counter].question,
      answerOptions: quizQuestions[this.state.profile.country][counter].answers,
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
      this.setState(
        {
           result: result[0],
           title: "Result"
          });
    } else {
      this.setState({
        result: 'Undetermined',
        title: "Result"
      });
    }
  }

  renderQuiz() {
    return (
      <Quiz
        answer={this.state.answer}
        answerOptions={this.state.answerOptions}
        questionId={this.state.questionId}
        question={this.state.question}
        questionTotal={quizQuestions[this.state.profile.country].length}
        onAnswerSelected={this.handleAnswerSelected}
      />
    );
  }
  renderProfileForm() {
    return (
      <Profile
        profile={this.state.profile}
        errors={this.state.errors}
        handleCountryChange={this.handleCountryChange}
        profileFormHandler={this.profileFormHandler}
        submitProfileDetail={this.submitProfileDetail}
        dobHandler={this.dobHandler}
        mobileHandler={this.mobileHandler}
        whatsappHandler={this.whatsappHandler}
      />

    )
  }

  renderResult() {
    return (
      <Result quizResult={this.state.result} />
    )
  }

  render() {
    return (
      <div className="row assement-page mb-5">
        <div className="col-sm-10 offset-sm-1">
          <div className="caption flex-space-between">
            <p className="formTitle">{this.state.title}</p>
          </div>
        </div>
        {this.state.isProfileShow ? this.renderProfileForm() : ""}
        {this.state.result ? this.renderResult() : this.renderQuiz()}
      </div>
    );
  }
}

export default Assessment;
