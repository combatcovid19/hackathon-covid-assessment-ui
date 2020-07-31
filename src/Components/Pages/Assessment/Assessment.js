import React, { Component } from 'react';
import { inject, observer } from "mobx-react";
import Quiz from './Quiz';
import Profile from './Profile';
import Result from './Result';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Spinner from 'react-bootstrap/Spinner';
import { validateForm, calculateAge, formValidation, profileRequestbinder } from "../../../util/utilityFunction";

const Assessment = inject("stores")(observer(class Assessment extends Component {
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
      assessmentScore: 0,
      providerList: [],
      profile: {
        fname: "",
        lname: "",
        dob: "",
        age: 0,
        gender: "MAL",
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
    this.props.stores.AppStore.setLoading(true);
    let profile = { ...this.state.profile };
    axios.get('http://localhost:19609/assessment/countries')
      .then((response) => {
        this.props.stores.AppStore.setLoading(false);
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
    this.props.stores.AppStore.setLoading(true);
    let profile = { ...this.state.profile };
    
    let reqBody = profileRequestbinder(profile);
    let errors = this.state.errors;
    formValidation(profile, errors);
    if (validateForm(this.state.errors)) {
      console.info('Valid Form')
      axios.put("http://localhost:19609/assessment/create", reqBody)
      .then((response) => {
        toast("Thanks for the information. Request you to answer few questions for assessment.");
        console.log("**response", response.data);
        let assessmentQuestions = response.data.assessmentQuestions;
        let profileDetails = response.data;
        this.props.stores.AppStore.setLoading(false);

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
        this.props.stores.AppStore.setLoading(false);
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
        profileCode: this.state.profileDetails.profileId,
        profileZipCode: this.state.profile.zipCode
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
    this.props.stores.AppStore.setLoading(true);
    axios.post("http://localhost:19609/assessment/save", this.state.usersAnswers)
      .then((response) => {
        console.log("***Save", response);
        this.props.stores.AppStore.setLoading(false);
        this.props.stores.AppStore.providers(response.data.nearestProviders);
        this.setState(
          {
              result: true,
              title: "Result",
              assessmentScore: response.data.assessmentScore,
              providerList: response.data.nearestProviders
            });
        
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
    return (
      <Result quizResult={this.state.result} assessmentScore={this.state.assessmentScore} />
    )
  }

  render() {
    return (
      <div className="row assement-page mb-5">
        <ToastContainer />
        {this.props.stores.AppStore.isLoading && <Spinner animation="border" variant="primary" />}
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
}))

export default Assessment;
