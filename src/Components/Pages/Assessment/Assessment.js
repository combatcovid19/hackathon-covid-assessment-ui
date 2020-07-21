import React, { Component } from 'react';
import quizQuestions from './quizQuestions';
import states from './states';
import Quiz from './Quiz';
import Profile from './Profile';
import Result from './Result';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { validateForm, calculateAge, formValidation, profileRequestbinder } from "../../../util/utilityFunction";

class Assessment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "Profile Details",
      counter: 0,
      questionCount: 1,
      question: '',
      answerOptions: [],
      answersCount: {},
      result: false,
      isProfileShow: true,
      profileDetails: {},
      assessmentQuestions: [],
      usersAnswers: [],
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
        countryList: [],
        statesList: [],
        districtOrCountyName: "",
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

  componentDidMount() {
    let profile = { ...this.state.profile };
    axios.get('http://localhost:19609/assessment/countries')
      .then((response) => {
        profile.countryList = response.data;
        this.setState({
          profile
        });
      });
      
  }

  // country select action.
  handleCountryChange = (event) => {
    let profile = { ...this.state.profile };
    profile.country = event.target.value;
    let country = event.target.value;
    let url = `http://localhost:19609/assessment/${country}/states/`;
    axios.get(url)
      .then((response) => {
        profile.statesList = response.data;
        this.setState({
          profile
        });
      });

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
    
    let reqBody = profileRequestbinder(profile);
    let errors = this.state.errors;
    formValidation(profile, errors);
    if (validateForm(this.state.errors)) {
      console.info('Valid Form')
      axios.put("http://localhost:19609/assessment/create", reqBody)
      .then((response) => {
        toast("Profile Save. Answer few Questions for Assessment.");
        let assessmentQuestions = response.data.assessmentQuestions;
        let profileDetails = response.data;

        this.setState({
          question: response.data.assessmentQuestions[0].questionDescription,
          answerOptions: response.data.assessmentQuestions[0].answerInformationList,
          counter: 0,
          answersCount: 0,
          questionCount: 1,
          isProfileShow: false,
          title: "Questionaries",
          assessmentQuestions: assessmentQuestions,
          profileDetails: profileDetails
        });
      });
      
    } else {
      console.error('Invalid Form', this.state.errors)
        toast("Please enter all required fields.");
      this.setState({
        profile,
        errors
      });
    }

    setTimeout(() => console.log("#1submit call", this.state), 300);
  }

  handleAnswerSelected(event) {
    this.setUserAnswer(event.currentTarget.value);

    if (this.state.questionCount < this.state.assessmentQuestions.length) {
      setTimeout(() => this.setNextQuestion(), 300);
    } else {
      this.setResults();
    }
  }

  setUserAnswer(answer) {
    let usersAnswers = {... this.state.usersAnswers};
    usersAnswers.profileAndBiomedicalAuthorityInfo = {
        biomedicalAuthorityCode: this.state.profileDetails.biomedical_Authority_Code,
        profileCode: this.state.profileDetails.profileId
    }
    usersAnswers.assessmentAnswers = usersAnswers.assessmentAnswers ? usersAnswers.assessmentAnswers : [];
    usersAnswers.assessmentAnswers.push(
      {
        answerOptionCode: answer,
        assessmentQuestionCode: this.state.assessmentQuestions[this.state.counter].questionId
      }
    )
    this.setState({
      usersAnswers: usersAnswers
    });
    // TODO. Call api to save answer and get result.

    setTimeout(() => console.log("#1Result", this.state.usersAnswers), 300);

  }

  setNextQuestion() {
    const counter = this.state.counter + 1;
    const questionCount = this.state.questionCount + 1;

    this.setState({
      counter: counter,
      questionCount: questionCount,
      question: this.state.assessmentQuestions[counter].questionDescription,
      answerOptions: this.state.assessmentQuestions[counter].answerInformationList
    });
  }


  setResults() {
    this.setState(
      {
          result: true,
          title: "Result"
        });
  }

  renderQuiz() {
    return (
      <Quiz
        answerOptions={this.state.answerOptions}
        questionCount={this.state.questionCount}
        question={this.state.question}
        questionTotal={this.state.assessmentQuestions.length}
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
    console.log("render result section");
    return (
      <Result quizResult={this.state.result} />
    )
  }

  render() {
    return (
      <div className="row assement-page mb-5">
        <ToastContainer />
        <div className="col-sm-10 offset-sm-1">
          <div className="caption flex-space-between">
            <p className="formTitle">{this.state.title}</p>
          </div>
        </div>
        {this.state.isProfileShow ? this.renderProfileForm() : ""}
        {(!this.state.isProfileShow && !this.state.result) ? this.renderQuiz() : ""}
        {this.state.result ? this.renderResult() : ""}
      </div>
    );
  }
}

export default Assessment;
