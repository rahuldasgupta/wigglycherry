import React, { useState } from "react";
import {
    BsCart3, BsSearch
} from "react-icons/bs";
import { BiMenuAltRight } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import Row from 'react-bootstrap/Row'
import Col from "react-bootstrap/Col";
import Fade from 'react-reveal/Fade';

//images
import logo from "../../assets/logo.png";
import "./navbar.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMediaIcons: false,
      categoriesView: false
    };
    this.changeView = this.changeView.bind(this);
  }
  changeView() {
    this.setState({ showMediaIcons: !this.state.showMediaIcons });
  }
  render() {
    return(
      <>
      <nav className="main-nav">
        <div className="logo">
            <img src={logo} className="logo-img"/>
        </div>
        <div
          className={
            this.state.showMediaIcons ? "menu-link mobile-menu-link" : "menu-link"
          }>
            <>
              <ul>
                <li onMouseOver={() => this.setState({categoriesView: false})}>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li onMouseOver={() => this.setState({categoriesView: true})}>
                  <NavLink to="/about">Categories</NavLink>
                </li>
                <li onMouseOver={() => this.setState({categoriesView: false})}>
                  <NavLink to="/contact">Offers/Discounts</NavLink>
                </li>
                <li>
                  <NavLink to="/service">Contact</NavLink>
                </li>
              </ul>
            </>
        </div>
        <div className="social-media">
          <ul className="social-media-desktop">
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <VscAccount size={25} className="nav-icons" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/thapatechnical/"
                target="_thapa">
                <BsSearch size={23} className="nav-icons" />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCwfaAHy4zQUb2APNOGXUCCA"
                target="_thapa">
                <BsCart3 size={25} className="nav-icons" />
              </a>
            </li>
          </ul>
          <div className="hamburger-menu">
            <a href="#" onClick={() => this.changeView()}>
              <BiMenuAltRight size={40} className="nav-icons"/>
            </a>
          </div>
        </div>
        {
          this.state.categoriesView?
            <div className="categories-hover-div" onMouseOver={() => this.setState({categoriesView: true})} onMouseOut={() => this.setState({categoriesView: false})}>
              <Row>
                <Col md={4}>
                  <p className="category-header">Vegetables</p>
                  <p className="category-header-txt">Potatoes</p>
                  <p className="category-header-txt">Tomatoes</p>
                  <p className="category-header-txt">Cabbage</p>
                  <p className="category-header-txt">Pumpkin</p>
                  <p className="category-header-txt">Cauliflower</p>
                  <p className="category-header-txt">Capsicum</p>
                  <p className="category-header-txt">Egg Plant</p>
                  <p className="category-header-txt">Karela</p>
                </Col>
                <Col md={4}>
                  <p className="category-header">Fruits</p>
                  <p className="category-header-txt">Banana</p>
                  <p className="category-header-txt">Apple</p>
                  <p className="category-header-txt">Kiwi</p>
                  <p className="category-header-txt">Avocardo</p>
                  <p className="category-header-txt">Dragon Fruits</p>
                  <p className="category-header-margin">Berries</p>
                  <p className="category-header-txt">Strawberries</p>
                  <p className="category-header-txt">Blueberries</p>
                </Col>
                <Col md={4}>
                  <p className="category-header">Dairy</p>
                  <p className="category-header-txt">Cheese/Paneer</p>
                  <p className="category-header-txt">Cream</p>
                  <p className="category-header-txt">Butter Milk/Lassi</p>
                  <p className="category-header-margin">Pickles</p>
                  <p className="category-header-txt">King Chilli Pickle</p>
                  <p className="category-header-txt">Naga Special Chutney</p>
                </Col>
              </Row>
            </div>
            :
            <></>
        }
      </nav>
    </>
    );
  }
}

export default Navbar;