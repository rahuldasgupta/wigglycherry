import React from "react";
import { withRouter } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
    getAuth,
    updatePassword,
    reauthenticateWithCredential,
    EmailAuthProvider,
  } from 'firebase/auth';
import {initializeApp} from 'firebase/app';
import { collection, query, where, getDocs, getFirestore, doc, setDoc, addDoc  } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import { FaRegCopy } from "react-icons/fa";
import { FiEdit } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { TfiSave } from "react-icons/tfi";

import user_img from "../../assets/user_img.png";
import profile_humanity from "../../assets/profile_humanity.png";
import profile_location from "../../assets/profile_location.png";
import profile_mail from "../../assets/profile_mail.png";

import Footer from "../../components/Footer/footer";
import "./account.css";
import "react-toastify/dist/ReactToastify.css";

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

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


class account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userData: {},
            firestoreUserData : {},
            isPhotoAvailable: false,
            photoURL: null,
            fullName: "",
            profileView: false,
            passwordView: false,
            walletView: true,
            securityView: false,
            notificationView: false,
            oldPassword: "",
            newPassword: "",
            confirmPassword: "",
            email: "",
            ethAddress: "",
            unstoppableAddress:"john.nft",
            slicedWallet: "",
            preferredView : "Profile",
            isSocialAccountConnected: false,
            isGoogleConnected: false,
            isLinkedInConnected: false,
            editInfoView: false,
            image: null,
            imgUrl: null,
            random: Math.floor(Math.random() * 100000000) + 1,
            newsletterEmail: "",
            errors:{},
        };
        this.handleOldPassword = this.handleOldPassword.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleNewPassword = this.handleNewPassword.bind(this);
        this.handleConfirmPassword = this.handleConfirmPassword.bind(this);
        this.toastFunct = this.toastFunct.bind(this);
        this.successToast = this.successToast.bind(this);
        this.profileEditToast = this.profileEditToast.bind(this);
        this.errorToast = this.errorToast.bind(this);
        this.saveData = this.saveData.bind(this);
        this.handleNewsletterEmail = this.handleNewsletterEmail.bind(this);
    }
  async componentDidMount(){
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
    auth.onAuthStateChanged((user) => {
        if (user) {
          this.setState({
            userData: user
          })
        }
    });

    var userData = JSON.parse(localStorage.getItem('userData'));
    let email = "";
    let data = {}
    if(userData){
        email= userData.email
        this.setState({
            email: userData.email,
            newsletterEmail: userData.email
        })
    }
    else{
        this.props.history.push("/");
    }
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
            fullName: data.fullName,
            isGoogleConnected: data.isGoogleConnected
        })
        if(data.isGoogleConnected){
            this.setState({
                isSocialAccountConnected: true
            })
        }
    });
  }
  getData = async () => {
    let docID = ""
    let email = this.state.email
    console.log(email)
    const db = getFirestore(app);
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        docID = doc._document.data.value.mapValue.fields
    });
    console.log(docID)
    this.setState({
        firestoreUserData: docID
    })
  }
  handleOldPassword = (event) => {
    this.setState({
        oldPassword: event.target.value
    });
  }
  handleName = (event) => {
    this.setState({
        fullName: event.target.value
    });
  }
  handleNewPassword = (event) => {
    this.setState({
        newPassword: event.target.value
    });
  }
  handleConfirmPassword = (event) => {
    this.setState({
        confirmPassword: event.target.value
    });
  }
  resetPassword = async () => {
    this.toastFunct();
    const {oldPassword, newPassword, confirmPassword, email} = this.state;
    console.log(oldPassword, newPassword, confirmPassword);
    const credential = EmailAuthProvider.credential(
        email,
        oldPassword
    );
    await reauthenticateWithCredential(auth.currentUser, credential)
    .then((response) => {
        console.log(response);
        this.successToast();
        this.setState({
            oldPassword: "",
            newPassword:"",
            confirmPassword: "",
            passwordView: false
        })
    })
    .catch((error) => {
        console.log("Error IS ====>", error);
        this.errorToast();
    });
    await updatePassword(auth.currentUser, newPassword);
  }
  toastFunct() {
    toast.info("Updating ..", {
      position: "bottom-center",
      autoClose: 1200,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  successToast() {
    toast.success("Password Updated Successfully", {
      position: "bottom-center",
      autoClose: 2700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  profileEditToast() {
    toast.success("Profile Updated Successfully", {
      position: "bottom-center",
      autoClose: 2700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  errorToast() {
    toast.error("Auth Error/Wrong Current Password", {
      position: "bottom-center",
      autoClose: 2700,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }
  warnToast(){
    toast.warn('Wallet address already linked', {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
  }
  saveData = async () => {
    const { image, fullName } = this.state;
    this.toastFunct()
    if(image){
        this.uploadImage();
    }
    let docID = ""
    let email = this.state.userData.email
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        docID = doc.id
    });
    const userRef = doc(db, "users", docID);
    await setDoc(userRef, { fullName: fullName }, { merge: true });
    this.profileEditToast();
    this.setState({
        editInfoView: false
    })
  }
  handleImage = async (event) => {
    let value = URL.createObjectURL(event.target.files[0]);
    this.setState({
        photoURL: value,
        image: event.target.files[0]
    })
  }
  uploadImage = async() => {
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    let file = this.state.image;
    let imageName = 'image-' + this.state.random;
    const storageRef = ref(storage, imageName);
    await uploadBytes(storageRef, file)
    .then(() => {
        getDownloadURL(storageRef).then((url)=> {
            this.setState({
                imgUrl: url
            })
            this.updateImageData(url)
        })
    })
  }
  updateImageData = async(url) => {
    const app = initializeApp(firebaseConfig);
    let docID = ""
    let email = this.state.userData.email
    const db = getFirestore(app);
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        docID = doc.id
    });
    console.log(url)
    const userRef = doc(db, "users", docID);
    await setDoc(userRef, { photoURL: url }, { merge: true });
  }
  handleTab = (domain) => {
    this.setState({
        preferredView: domain
    })
  }
  submitNewsletter = async() => {
    let docID = ""
    const app = initializeApp(firebaseConfig);
    let email = this.state.email;
    const db = getFirestore(app);
    const q = query(collection(db, "users"), where("email", "==", email));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
        docID = doc.id
    });
    const userRef = doc(db, "users", docID);
    await setDoc(userRef, { newsletter: true }, { merge: true });
    const newsletterAdd = await addDoc(collection(db, "newsletter"), {
        email: this.state.newsletterEmail
    });
    console.log("Document written with ID: ", newsletterAdd.id);
    window.location.reload();
  }
  handleNewsletterEmail = (event) => {
    var re = /\S+@\S+\.\S+/;
    var result = re.test(event.target.value);
    let errors = this.state.errors;
    if(re.test(event.target.value))
    {
      errors["newsletterEmail"] = null
      this.setState({ errors: errors});
      console.log(result)
    }
    else{
      errors["newsletterEmail"] = "Invalid Email";
      this.setState({ errors: errors });
    }
    this.setState({
        newsletterEmail: event.target.value
    });
  }
  render() {
    return (
        <>
            <div className="settings_body">
                <p className="settings_header_title">Account</p>
                <div className="dashboard_domains_tab">
                    {
                        this.state.preferredView === "Profile" ?
                            <button className="settings_domains_tab_active_first">
                                <span className="searchBtn_txt">Profile</span>
                            </button>
                        :
                            <button className="settings_domains_tab_inactive_first" onClick={() => this.handleTab("Profile")}>
                                <span className="searchBtn_txt">Profile</span>
                            </button>
                    }
                    {
                        this.state.preferredView === "Notification" ?
                            <button className="settings_domains_tab_active">
                                <span className="searchBtn_txt">Notification</span>
                            </button>
                            :
                            <button className="settings_domains_tab_inactive" onClick={() => this.handleTab("Notification")}>
                                <span className="searchBtn_txt">Notification</span>
                            </button>
                    }
                    {
                        this.state.preferredView === "Orders" ?
                            <button className="settings_domains_tab_active">
                                <span className="searchBtn_txt">Orders</span>
                            </button>
                            :
                            <button className="settings_domains_tab_inactive" onClick={() => this.handleTab("Orders")}>
                                <span className="searchBtn_txt">Orders</span>
                            </button>
                    }
                </div>
                {
                    this.state.preferredView === "Profile" ?
                        <Row>
                            <Col md={7}>
                                <div className="profile_left_firstDiv">
                                    <Row>
                                        <Col md={2}>
                                            {
                                                this.state.photoURL != "" ?
                                                    <>
                                                        <img src={this.state.photoURL} className="settings_profileImage_empty"/>
                                                        {
                                                            this.state.editInfoView ?
                                                            <label id="pic1">
                                                                <input
                                                                    type="file"
                                                                    name="fileToUpload"
                                                                    id="fileToUpload"
                                                                    size="1"
                                                                    accept="image/*"
                                                                    onChange={(event) => {this.handleImage(event)}}
                                                                />
                                                                <center>
                                                                    <AiOutlinePlus
                                                                        size={18}
                                                                        className="AiOutlinePlus-icon2"
                                                                    />
                                                                </center>
                                                            </label>
                                                            :
                                                            <></>
                                                        }
                                                    </>
                                                :
                                                    <>
                                                        <img src={user_img} className="settings_profileImage_empty"/>
                                                        {
                                                            this.state.editInfoView ?
                                                            <label id="pic1">
                                                                <input
                                                                    type="file"
                                                                    name="fileToUpload"
                                                                    id="fileToUpload"
                                                                    size="1"
                                                                    accept="image/*"
                                                                    onChange={(event) => {this.handleImage(event)}}
                                                                />
                                                                <center>
                                                                    <AiOutlinePlus
                                                                        size={18}
                                                                        className="AiOutlinePlus-icon2"
                                                                    />
                                                                </center>
                                                            </label>
                                                            :
                                                            <></>
                                                        }
                                                    </>
                                            } 
                                        </Col>
                                        <Col md={9}>
                                            {
                                                this.state.editInfoView ?
                                                <>
                                                    <input
                                                        className="setFullName_settings"
                                                        type="text"
                                                        placeholder="Enter Full Name"
                                                        onChange={(e) => {this.handleName(e)}}
                                                        value={this.state.fullName}
                                                    />
                                                </>
                                                :
                                                <>
                                                {
                                                    this.state.fullName === undefined ?
                                                        <p className="settings_fullName">Name not set</p>
                                                    :
                                                        <p className="settings_fullName">{this.state.fullName}</p>
                                                }
                                                </>
                                            }
                                            
                                            <p className="settings_walletAddress">{this.state.email}<FaRegCopy size={14} className="FaRegCopy-icon" onClick={() => {navigator.clipboard.writeText(this.state.email)}}/></p>
                                        </Col>
                                        <Col md={1}>
                                            {
                                                this.state.editInfoView ?
                                                    <TfiSave size={20} className="FaRegCopy-icon"  onClick={() => this.saveData()}></TfiSave>
                                                :
                                                    <FiEdit size={20} className="FaRegCopy-icon" onClick={() => this.setState({editInfoView: true})}></FiEdit>
                                            }
                                        
                                        </Col>
                                    </Row>
                                    <p className="profile_bio">Two parts product, one part data, finance to taste. I write about systems, organizational design, and crypto.</p>
                                    <hr className="profile_hr"/>
                                    <p className="profile_humanityTxt"><img src={profile_humanity} className="profile_humanity"/>User Verified</p>
                                    <p className="profile_humanityTxt_black"><img src={profile_mail} className="profile_humanity"/>+91-8794803021</p>
                                    <p className="profile_humanityTxt_black"><img src={profile_location} className="profile_humanity"/>Kohima, Nagaland - India</p>
                                </div>
                                <div className="profile_left_firstDiv">
                                    <p className="settings_TabsTittle">Basic Information</p>
                                    <p className="profile_bio">Make sure you saved basic information & address correct for no delay in delivery.</p>
                                    <div className="profile_skyblueBtn">
                                        <p className="profile_skyblueBtn_txt">Update</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md={5}>
                                <div className="profile_left_firstDiv">
                                    <p className="settings_TabsTittle">Account</p>
                                    {
                                        this.state.isGoogleConnected ?
                                        <p className="profile_bio">Reset Password unavailable since you signed up with Google.</p>
                                        :
                                        <></>
                                    }
                                    {
                                        this.state.isSocialAccountConnected ?
                                        <></>
                                        :
                                        <p className="profile_bio">Here you can edit public information about yourself. The changes will be displayed for others within 5 minutes.</p>
                                    }
                                    {
                                        this.state.passwordView ?
                                            <>
                                                <p className="oldPasswordInput_labels">Old Password</p>
                                                <input
                                                    className="oldPasswordInput"
                                                    type="password"
                                                    placeholder="Enter last used password"
                                                    onChange={(e) => {this.handleOldPassword(e)}}
                                                    value={this.state.oldPassword}
                                                />
                                                <p className="oldPasswordInput_labels">New Password</p>
                                                <input
                                                    className="oldPasswordInput"
                                                    type="password"
                                                    placeholder="Enter new password"
                                                    onChange={(e) => {this.handleNewPassword(e)}}
                                                    value={this.state.newPassword}
                                                />
                                                <p className="oldPasswordInput_labels">Confirm Password</p>
                                                <input
                                                    className="oldPasswordInput"
                                                    type="password"
                                                    placeholder="Confirm new password"
                                                    onChange={(e) => {this.handleConfirmPassword(e)}}
                                                    value={this.state.confirmPassword}
                                                />
                                                <div className="settings_save_btn" onClick={() => this.resetPassword()}>
                                                    <p className="profile_save_btn_txt">Save changes</p>
                                                </div>
                                            </>
                                        :
                                            <>
                                            {
                                                this.state.isSocialAccountConnected ?
                                                <div className="profile_skyblueBtn_disabled">
                                                    <p className="profile_skyblueBtn_txt_disabled">Reset Password</p>
                                                </div>
                                                :
                                                <div className="profile_skyblueBtn" onClick={() => this.setState({passwordView: true})}>
                                                    <p className="profile_skyblueBtn_txt">Reset Password</p>
                                                </div>
                                            }
                                            </>
                                            
                                    }
                                </div>
                                <div className="profile_left_firstDiv">
                                    <p className="settings_TabsTittle">Account Closure</p>
                                    <p className="profile_bio">We are sorry to let you go. All your data will be deleted from our servers in 24 hrs.</p>
                                    <div className="profile_skyblueBtn">
                                        <p className="profile_skyblueBtn_txt">Delete Account</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    :
                        <></>
                }
                {
                    this.state.preferredView === "Notification" ?
                        <Row>
                            <Col md={6}>
                                <div className="profile_left_firstDiv">
                                    <p className="settings_TabsTittle">Newsletter</p>
                                    <p className="profile_bio">Subscribe to monthly newsletter and promotional emails to get notified of recent updates</p>
                                    {
                                        this.state.userData.newsletter ?
                                        <>
                                        <div className="profile_greenBtn">
                                            <p className="profile_greenBtn_txt">Subscribed</p>
                                        </div>
                                        </>
                                        :
                                        <>
                                            <p className="oldPasswordInput_labels">Email</p>
                                            <input
                                                className="oldPasswordInput"
                                                type="text"
                                                placeholder="Enter Email ID"
                                                onChange={(e) => {this.handleNewsletterEmail(e)}}
                                                value={this.state.newsletterEmail}
                                            />
                                            {  
                                                this.state.errors["newsletterEmail"] ? (
                                                    <span  className="validateErrorTxt_newsletter">
                                                        {this.state.errors["newsletterEmail"]}
                                                    </span>
                                                ) :
                                                (
                                                    <div className="registerInputMargin"></div>
                                                )
                                            }
                                            <div className="settings_save_btn2" onClick={() => this.submitNewsletter()}>
                                                <p className="profile_save_btn_txt">Save</p>
                                            </div>
                                        </>
                                    }
                                    
                                </div>
                            </Col>
                        </Row>
                        :
                        <></>
                }
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </>
    );
  }
}

export default withRouter(account);
