import React from "react";
import { withRouter } from "react-router-dom";
import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import { AiOutlineHome, AiOutlineSetting, AiOutlineShop } from "react-icons/ai";
import { TfiWorld } from "react-icons/tfi";
import { BiChevronDown } from "react-icons/bi";
import { BsTools, BsPersonCircle } from "react-icons/bs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { RiToolsFill } from "react-icons/ri";
import { MdOutlineLogout } from "react-icons/md";

import appIcon from "../../assets/appIcon.png";
import { NavLink } from "../navbar/NavbarElements";
import "./custom.scss";
import "./sidebar_styles.css";

class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sideBar: this.props.sideBarShow,
      isLoggedIn: false,
      toolsActive: false,
      domain: "",
      photoURL: null,
      name: null,
      email: null
    };
    this.handleDomainName = this.handleDomainName.bind(this);
    this.clearAsyncStorage = this.clearAsyncStorage.bind(this);
  }
  componentDidMount = () =>{
    var userData = JSON.parse(localStorage.getItem('userData'));
    if(userData){
      this.setState({
          isLoggedIn: true,
          photoURL: userData.photoURL,
          name: userData.displayName,
          email: userData.email
      })
    }
    console.log("USERDATA ====>", userData)
  }
  handleDomainName = (event) => {
    this.setState({
      domain: event.target.value,
    });
  }
  toggleButton = () => {
    setTimeout(() => {
      this.setState({
        sideBar: !this.state.sideBar,
      });
    }, 3000);
  };
  navigateHome = () => {
    this.props.history.push("/");
    this.toggleButton()
  }
  navigateDomains = () => {
    this.props.history.push("/Domains");
    this.toggleButton()
  }
  navigateTools = () => {
    //this.props.history.push("/comingSoon?page=TOOLS");
    this.setState({
      sideBar: this.state.sideBar,
      toolsActive: !this.state.toolsActive
    });
  }
  navigateMarketplace = () => {
    this.props.history.push("/comingSoon?page=MARKETPLACE");
    this.toggleButton()
  }
  navigateSettings= () => {
    this.props.history.push("/Settings");
    this.toggleButton()
  }
  navigateLogin= () => {
    this.props.history.push("/Login");
    this.toggleButton()
  }
  navigateRegister = () => {
    this.props.history.push("/Register");
    this.toggleButton()
  }
  clearAsyncStorage = async() => {
    localStorage.clear();
    window.location.reload();
  }
  render() {
    return (
      <>
        {
          this.state.sideBar?
            <ProSidebar className="ProSidebar_Height">
              <div className="sidebar_search" style={{marginTop:"12%", marginLeft:"3%", marginRight: "3%"}}>
                <Row style={{marginLeft:"1%", marginRight: "1%"}}>
                  <Col xs={8} sm={8}>
                    <input
                        className="navbar_searchInput_sidebar"
                        type="text"
                        placeholder="Search domains"
                        onChange={(e) => {this.handleDomainName(e)}}
                        value={this.state.domain}
                    />
                  </Col>
                  <Col xs={4} sm={4}>
                  <NavLink to={"/?search="+this.state.domain}>
                    <p className="navbar_searchTxT2">SEARCH</p>
                    </NavLink>
                  </Col>
                </Row>
              </div>
              {
                this.state.isLoggedIn ?
                  <div>
                    <img src={this.state.photoURL} className="sidebar_profilePicture"/>
                    <Row className="sidebar_profileVIEW">
                      <Col>
                        <p className="Ownedby">{this.state.name}</p>
                        <p className="KJHG56">{this.state.email}</p>
                      </Col>
                    </Row>
                    <hr className="sidebar_divider"></hr>
                  </div>
                :
                  <></>
              }
              <Menu iconShape="square" className="sidebar-icons-margin">
                <MenuItem onClick={this.navigateHome} className={window.location.pathname === "/" ? "sidebarTabActive" : "sidebarTabInctive"} icon={<AiOutlineHome size={25} color={window.location.pathname === "/" ? "#0D67FE" : "#242424"}/>}>
                  <span className={window.location.pathname === "/" ? "sidebar-item-txt-active" : "sidebar-item-txt"}>Home</span>
                </MenuItem>
                <MenuItem onClick={this.navigateDomains} className={window.location.pathname === "/Domains" ? "sidebarTabActive" : "sidebarTabInctive"} icon={<TfiWorld size={23} color={window.location.pathname === "/Domains" ? "#0D67FE" : "#242424"}/>}>
                  <span className={window.location.pathname === "/Domains" ? "sidebar-item-txt-active" : "sidebar-item-txt"}>Domains</span>
                </MenuItem>
                <MenuItem onClick={this.navigateMarketplace} className={window.location.pathname === "/Marketplace" ? "sidebarTabActive" : "sidebarTabInctive"} icon={<AiOutlineShop size={24} color={window.location.pathname === "/Marketplace" ? "#0D67FE" : "#242424"}/>}>
                  <span className={window.location.pathname === "/Marketplace" ? "sidebar-item-txt-active" : "sidebar-item-txt"}>Marketplace</span>
                </MenuItem>
                {
                  this.state.isLoggedIn ?
                    <MenuItem onClick={this.navigateSettings} className={window.location.pathname === "/Settings" ? "sidebarTabActive" : "sidebarTabInctive"} icon={<AiOutlineSetting size={27} color={window.location.pathname === "/Settings" ? "#0D67FE" : "#242424"}/>}>
                      <span className={window.location.pathname === "/Settings" ? "sidebar-item-txt-active" : "sidebar-item-txt"}>Account Settings</span>
                    </MenuItem>
                  :
                  <></>
                }
                <hr className="sidebar_divider"></hr>
                <MenuItem onClick={this.navigateTools} className={this.state.toolsActive ? "sidebarTabActive" : "sidebarTabInctive"} icon={<RiToolsFill size={25} color={this.state.toolsActive ? "#0D67FE" : "#242424"}/>}>
                  <span className={this.state.toolsActive ? "sidebar-item-txt-active" : "sidebar-item-txt"}>Tools <BiChevronDown className="toolsActive_dropDown" size={25} color={this.state.toolsActive ? "#0D67FE" : "#242424"}/></span>
                </MenuItem>
                {
                  this.state.toolsActive ?
                  <>
                    <MenuItem className="sidebarTabSubList">
                      <span onClick={this.navigateDomains} className="sidebar-item-subtxt">Subdomains</span>
                    </MenuItem>
                    <MenuItem className="sidebarTabSubList">
                      <span onClick={this.navigateDomains} className="sidebar-item-subtxt">Bulk Manage</span>
                    </MenuItem>
                    <MenuItem className="sidebarTabSubList">
                      <span onClick={this.navigateDomains} className="sidebar-item-subtxt">Aggregate Search</span>
                    </MenuItem>
                    <MenuItem className="sidebarTabSubList">
                      <span onClick={this.navigateDomains} className="sidebar-item-subtxt">Valuation</span>
                    </MenuItem>
                  </>
                  :
                  <></>
                }
                
                {
                  this.state.isLoggedIn ?
                  <>
                    <MenuItem onClick={this.clearAsyncStorage} className="sidebarTabRed" icon={<MdOutlineLogout size={26} color="#FF0000"/>}>
                      <span className="sidebar-item-txt-red">Sign Out</span>
                    </MenuItem>
                  </>
                  :
                  <>
                    <hr className="sidebar_divider"></hr>
                    <MenuItem onClick={this.navigateLogin} className={window.location.pathname === "/Login" ? "sidebarTabActive" : "sidebarTabInctive"} icon={<BsPersonCircle size={25} color={window.location.pathname === "/Login" ? "#0D67FE" : "#242424"}/>}>
                      <span className={window.location.pathname === "/Login" ? "sidebar-item-txt-active" : "sidebar-item-txt"}>Login/Register</span>
                    </MenuItem>
                  </>
                }
                <div className="empty-sidebar-div"></div>
              </Menu>
            </ProSidebar>
          :
            <></>
        }
      </>
    );
  }
}

export default withRouter(SideBar);
