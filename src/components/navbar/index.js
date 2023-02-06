import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import SideBar from "../Sidebar/sidebar";
import { AiOutlineShoppingCart, AiOutlineSetting } from "react-icons/ai";
import {initializeApp} from 'firebase/app';
import { collection, query, where, getDocs, getFirestore, doc, setDoc } from "firebase/firestore";

//images
import sidebar_icon from "../../assets/sidebar.png";
import appIcon from "../../assets/appIcon.png";
import logo from "../../assets/logo.png";

const firebaseConfig = {
  apiKey: "AIzaSyBUbLDQeX3wFCC1QMsBxny03mXjs2k2MGs",
  authDomain: "verityverification0.firebaseapp.com",
  databaseURL: "https://verityverification0-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "verityverification0",
  storageBucket: "verityverification0.appspot.com",
  messagingSenderId: "709250129230",
  appId: "1:709250129230:web:321b332165e243328a521f",
  measurementId: "G-QX1DD7CMM7"
};


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBar: false,
      isLoggedIn: false,
      kycModal: false,
      domain: "",
      dropdownView: false,
      dropdownView2: false,
      isCartValue: false,
      userData: {},
      email: "",
      photoURL: null,
      fullName: "",
      referenceModal: false,
      enterRefView: true,
      referenceCode:"",
      referenceCodeSection: false,
      refEmail: "",
      referenceCodeFinal: "",
      isSkipTrue: false,
      greenReferred: false,
      shouldOpenReferenceModal: true
    };
    this.clearAsyncStorage = this.clearAsyncStorage.bind(this);
    this.handleDomainName = this.handleDomainName.bind(this);
    this.handleReferenceEmail = this.handleReferenceEmail.bind(this);
    this.handleReferenceCode = this.handleReferenceCode.bind(this);
  }
  handleDomainName = (event) => {
    this.setState({
      domain: event.target.value,
    });
  }
  async componentDidMount(){
    let referenceCode = localStorage.getItem("referenceCode");
    if(referenceCode)
    {
      this.setState({
        shouldOpenReferenceModal: false
      })
    }

    var userData = JSON.parse(localStorage.getItem('userData'));
    let email = "";
    let data = {}
    if(userData){
      email= userData.email
      this.setState({
          email: userData.email,
          isLoggedIn: true
      })
      const app = initializeApp(firebaseConfig);
      const db = getFirestore(app);
      const q = query(collection(db, "users"), where("email", "==", email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        data=doc.data()
          this.setState({
              userData: data,
              photoURL: data.photoURL,
              fullName: data.fullName
          })
      });
    }
    var cartName = localStorage.getItem("cartName");
    if(cartName){
      this.setState({
        isCartValue: true
      })
    }
  }
  clearAsyncStorage = async() => {
    localStorage.clear();
    window.location.reload();
  }
  handleReferenceCode = (event) => {
    this.setState({
        referenceCode: event.target.value,
    });
  }
  handleReferenceEmail = (event) => {
    this.setState({
      refEmail: event.target.value,
    });
  }
  proceedReference = () => {
    this.setState({
      greenReferred: true,
      referenceCodeSection: true,
    })
    let referenceCode = this.state.referenceCode;
    localStorage.setItem("referenceCode", referenceCode);
    let url = window.location.origin + "/Cart"
    setTimeout(() => {
      this.setState({referenceModal: false, referenceCodeFinal: this.state.referenceCode});
      window.location.replace(url)
    }, 2000);
  }
  handleSkip = () => {
    this.setState({
        referenceModal: false,
        isSkipTrue: true
    })
  }
  render() {
    let domain = this.state.domain
    return (
      <>
        <Nav>
          <div className="side-bar">
            {
              this.state.sideBar ?
              <Row>
                <Col onClick={() => this.setState({ sideBar: true })}>
                  <SideBar sideBarShow={this.state.sideBar}/>
                </Col>
              </Row>
              :
              <Row>
                <Col>
                  <div className="mobile-side-img-div2">
                    <img
                        alt="sidebar"
                        src={sidebar_icon}
                        className="sidebar-icon"
                        onClick={() => this.setState({ sideBar: true })}
                      />
                  </div>
                </Col>
                <Col md={3} sm={3} xs={3}>
                  <NavLink to="/">
                    <img
                        alt="sidebar"
                        src={appIcon}
                        className="nav_appIcon"
                      />
                  </NavLink>
                </Col>
                <Col md={5} sm={5} xs={5}>
                  <NavLink to="/cart">
                    <AiOutlineShoppingCart
                        size={25}
                        className="AiOutlineShoppingCart_icon"
                      />
                    </NavLink>
                </Col>
              </Row>
            }
          </div>
          <NavMenu>
            <center>
              <img src={logo} className="nav_logo"/>
              <Row className="navbar_tabs">
                <Col>
                  <NavLink to="/">
                    <p className="navbar_tabs_title">Home</p>
                  </NavLink>
                </Col>
                <Col>
                  <NavLink to="/Search">
                    <p className="navbar_tabs_title">Search</p>
                  </NavLink>
                </Col>
                <Col>
                  <NavLink to="/Cart">
                    <p className="navbar_tabs_title">Cart</p>
                  </NavLink>
                </Col>
                <Col>
                  {
                    this.state.isLoggedIn ?
                      <NavLink to="/Account">
                        <p className="navbar_tabs_title">Account</p>
                      </NavLink>
                    :
                      <NavLink to="/About">
                        <p className="navbar_tabs_title">About</p>
                      </NavLink>
                  }
                </Col>
                <Col>
                  {
                    this.state.isLoggedIn ?
                      <p className="navbar_tabs_title" onClick={this.clearAsyncStorage}>Sign Out</p>
                    :
                      <NavLink to="/Login">
                        <p className="navbar_tabs_title">Login</p>
                      </NavLink>
                  }
                </Col>
              </Row>
            </center>     
          </NavMenu>
        </Nav>
      </>
    );
  }
}

export default Navbar;
