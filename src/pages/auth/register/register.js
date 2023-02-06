import React from "react";
import { withRouter } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {getAuth, GoogleAuthProvider, signInWithPopup, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { getFirestore, collection, addDoc  } from "firebase/firestore";

import google from "../../../assets/google.png";
import facebook from "../../../assets/facebook.png";

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

class register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      phoneView: false,
      email: "",
      password: "",
      fullName: "",
      errors:{},
      count: 0
    };
    this.handleRegister = this.handleRegister.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleEmail = this.handleEmail.bind(this);
    this.handlePassword = this.handlePassword.bind(this);
  }
  handleName = (event) => {
    let errors = this.state.errors;
    let name = event.target.value.length
    if (name>4) {
      errors["name"] = null
      this.setState({ errors: errors});
    }
     else {
      errors["name"] = "Must be at least 5 characters";
      this.setState({ errors: errors});
    }
    this.setState({
        fullName: event.target.value,
    });
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
  navigateLogin(){
    this.props.history.push("/login");
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
        let photoURL = user.photoURL;
        let new_photoURL = photoURL.replace(/s96-c/g, "s400-c");
        this.userFirestore(user.uid, user.email, "google", user.displayName, new_photoURL)
        this.storeData(user);
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
  handleRegister = async () => {
    const { email, password, fullName } = this.state;
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    let emailWarning = this.state.errors["email"];
    let nameWarning = this.state.errors["name"];
    let passwordWarning = this.state.errors["password"];
    if(fullName != "" && email != "" && password != ""){
        if(emailWarning == null && nameWarning == null && passwordWarning == null)
        {
            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Account Created with FIREBASE")
                const user = userCredential.user;
                updateProfile(userCredential.user, { displayName : fullName })
                setTimeout(() => {
                this.storeData(user);
                this.userFirestore(user.uid, email, "email", fullName, "")
                }, 2500);
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
    }
  }
  userFirestore = async(uid, email, social, name, photoURL) => {
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    //const data = await getDocs(collection(db, "users"));
    //const fetchedData = data.docs.map((doc) => ({...doc.data(), id: doc.id}))
    try {
        if(this.state.count === 0){
            const createUser = await addDoc(collection(db, "users"), {
                fullName: name,
                email: email,
                photoURL: photoURL,
                isGoogleConnected: social === "google" ? true : false,
                userID: uid,
                address: "",
                pincode: "",
                city:"",
                state: "",
                district: "",
                phoneNumber: ""
            });
            this.setState({ count: 1})
            console.log("Document written with ID: ", createUser.id);
        }
        this.props.history.push("/account");
    } catch (e) {
        console.error("Error adding document: ", e);
    }
  }
  render() {
    return (
      <>
        <div className="container-box_register">
            <div className="login_containerBox_inner">
                <p className="login_header_text">Create Account</p>
                <input
                    className="emailInput"
                    type="text"
                    placeholder="Full name"
                    onChange={this.handleName}
                    onFocus={this.handleName}
                    value={this.state.fullName}
                />
                {  
                    this.state.errors["name"] ? (
                        <span
                            id="marginInputs"
                            className="validateErrorTxt registerInputMargin"
                        >
                            {this.state.errors["name"]}
                        </span>
                    ) :
                    (
                        <div className="registerInputMargin"></div>
                    )
                }
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
                <div className="login_button" onClick={() => this.handleRegister()}>
                    <p className="login_signup_ques_text_white">Register</p>
                </div>
                <p className="signup_with">or Sign up with</p>
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
                        <div className="social_button">
                            <center>
                                <img src={facebook} className="social_button_icon_phone"/>
                                <span className="social_button_text">Facebook</span>
                            </center>
                        </div>
                    </Col>
                </Row>
                <div className="hr"></div>
                <p className="login_signup_ques_text">Already have an account?</p>
                <div className="social_button"  onClick={() => this.navigateLogin()}>
                    <p className="login_signup_ques_text">Login</p>
                </div>
            </div>
        </div>
      </>
    )
  }
}
export default withRouter(register);
