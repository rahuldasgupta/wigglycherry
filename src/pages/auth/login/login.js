import React from "react";
import { withRouter } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {getAuth, signInWithEmailAndPassword, GoogleAuthProvider, TwitterAuthProvider, signInWithPopup} from 'firebase/auth';
import {initializeApp} from 'firebase/app';

import google from "../../../assets/google.png";
import facebook from "../../../assets/facebook.png";
import './login.css'

const firebaseConfig = {
    apiKey: "AIzaSyD5Am1-f0wOX8H7CL-rZDMi7zv4cFfxQdE",
    authDomain: "wigglycherry-5443a.firebaseapp.com",
    databaseURL: "https://wigglycherry-5443a-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "wigglycherry-5443a",
    storageBucket: "wigglycherry-5443a.appspot.com",
    messagingSenderId: "12034827552",
    appId: "1:12034827552:web:0a5a81fb0d7b71568f6345",
    measurementId: "G-6MT19GTMWQ"
};

class login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchView: false,
      email: "",
      password: "",
      errors: {},
      users: [],
      unstoppableUser: false,
      isLoading: false,
      unstoppableAuthorization: null,
      count: 0
    };
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  navigateRegister(){
    this.props.history.push("/register");
  }
  handleEmail = (event) => {
    var re = /\S+@\S+\.\S+/;
    var result = re.test(event.target.value);
    let errors = this.state.errors;
    if(re.test(event.target.value))
    {
      errors["email"] = null
      this.setState({ errors: errors});
      console.log(result)
    }
    else{
      errors["email"] = "Invalid Email";
      this.setState({ errors: errors });
    }
    this.setState({
      email: event.target.value,
    });
  };
  handlePassword = (event) => {
    this.setState({
        password: event.target.value
    });
    let errors = this.state.errors;
    var password = this.state.password;
    var passwordLength = password.length;
    console.log("LENGTH ====>", passwordLength)
    if (passwordLength > 6) {
        errors["password"] = null
        this.setState({ errors: errors});
    }
    else {
        errors["password"] = "Must be 8 or more characters";
        this.setState({ errors: errors });
    }
  };
  handleLogin = async () => {
    const { email, password } = this.state;
    console.log(email)
    console.log(password)

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app)

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("Signed In With FIREBASE")
        const user = userCredential.user;
        console.log(user);
        this.storeData(user);
        this.props.history.push("/account");
      })
      .catch((error) => {
        console.log("Error IS ====>", error);
        let errors = {};
        errors["msg"] = "Authentication Failed";
        this.setState({ errors });
        setTimeout(() => {
          this.setState({ errors: {} });
        }, 3000);
      })
  }
  handleGoogleLogin = async => {
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(auth, googleProvider)
      .then((userCredential) => {
        console.log("Signed In With FIREBASE")
        const user = userCredential.user;
        console.log(user);
        this.storeData(user);
        this.props.history.push("/account");
      })
      .catch((error) => {
        console.log("Error IS ====>", error);
        let errors = {};
        errors["msg"] = "Authentication Failed";
        this.setState({ errors });
        setTimeout(() => {
          this.setState({ errors: {} });
        }, 3000);
        //this.setState({ isSignupState: false });
      })
  }
  storeData = async (userData) => {
    localStorage.setItem("userData", JSON.stringify(userData));
    console.log("<=====UserData Saved=====>");
  };
  async componentDidMount(){
    var userData = JSON.parse(localStorage.getItem('userData'));
    if(userData){
        this.props.history.push("/profile");
    }
  }
  forgotPasswordNavigate = () => {
    this.props.history.push("/ForgotPassword");
  }
  render() {
    return (
        <>
            <div className="container-box_register">
                <div className="login_containerBox_inner">
                    <p className="login_header_text">Login</p>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <input
                                className="emailInput"
                                type="text"
                                placeholder="Email"
                                onChange={this.handleEmail}
                                onFocus={this.handleEmail}
                                value={this.state.email}
                            />
                            {  
                                this.state.errors["email"] ? (
                                    <span
                                        id="marginInputs"
                                        className="validateErrorTxt registerInputMargin"
                                    >
                                        {this.state.errors["email"]}
                                    </span>
                                ) :
                                (
                                    <div className="registerInputMargin"></div>
                                )
                            }
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <input
                                className="emailInput"
                                type="password"
                                placeholder="Password"
                                onChange={this.handlePassword}
                                onFocus={this.handlePassword}
                                value={this.state.password}
                            />
                            {  
                                this.state.errors["password"] ? (
                                    <span
                                        id="marginInputs"
                                        className="validateErrorTxt registerInputMargin"
                                    >
                                        {this.state.errors["password"]}
                                    </span>
                                ) :
                                (
                                    <div className="registerInputMargin"></div>
                                )
                            }
                            <p className="login_ForgotPasswordText" onClick={this.forgotPasswordNavigate}>Forgot Password?</p>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={12} sm={12} xs={12}>
                            <div className="login_button" onClick={() => this.handleLogin()}>
                                <p className="login_signup_ques_text_white">Log In</p>
                            </div>
                        </Col>
                    </Row>
                    <p className="signup_with">or Log in with</p>
                    <Row>
                        <Col md={6} xs={6} sm={6}>
                            <div className="social_button" onClick={this.handleGoogleLogin}>
                                <center>
                                    <img src={google} className="social_button_icon"/>
                                    <span className="social_button_text">Google</span>
                                </center>
                            </div>
                        </Col>
                        <Col md={6} xs={6} sm={6}>
                            <div className="social_button" onClick={this.handleGoogleLogin}>
                                <center>
                                    <img src={facebook} className="social_button_icon"/>
                                    <span className="social_button_text">Facebook</span>
                                </center>
                            </div>
                        </Col>
                    </Row>
                    <div className="hr"></div>
                    <p className="login_signup_ques_text">Don't have an account?</p>
                    <div className="social_button" onClick={() => this.navigateRegister()}>
                        <p className="login_signup_ques_text">Register</p>
                    </div>
                </div>
            </div>
        </>
    )
  }
}
export default withRouter(login);
