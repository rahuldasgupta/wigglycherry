import React from "react";
import { withRouter, Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tabs from "../../../src/components/bottomTab/bottomTab"
import Footer from "../../components/footer/footer";
import { FiHeart, FiMinusCircle } from "react-icons/fi";
import { BsFillPlusCircleFill } from "react-icons/bs";
import MetaTags from 'react-meta-tags';

//Images
import carousel_1 from "../../assets/carousel_1.jpg";
import carousel_2 from "../../assets/carousel_2.jpg";
import carousel_3 from "../../assets/carousel_3.png";
import apple from "../../assets/apple.png"
import cabbage from "../../assets/cabbage.png"
import dairy from "../../assets/dairy.png"
import jar from "../../assets/jar.png"
import discount from "../../assets/discount.png"
import top_selling from "../../assets/top_selling.png"
import slider_1 from "../../assets/slider_1.png"
import slider_2 from "../../assets/slider_2.png"
import slider_3 from "../../assets/slider_3.png"

//CSS
import 'react-multi-carousel/lib/styles.css';
import "./home.css";
import "./home.scss";

const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      paritialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      paritialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 0
    }
  };

const cardsResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      paritialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      paritialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
      paritialVisibilityGutter: 50,
      
    }
  };
const categoriesResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
      paritialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 4,
      paritialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 50,
      
    }
  };
const berriesResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 500 },
      items: 3,
      paritialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: { max: 499, min: 464 },
      items: 2,
      paritialVisibilityGutter: 0
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      paritialVisibilityGutter: 0
    }
  };
class home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchView: true,
      berries_cart_1: 1,
      berries_cart_2: 1,
      berries_cart_3: 1
    };
    this.changeView = this.changeView.bind(this);
    this.increaseValue = this.increaseValue.bind(this);
    this.decreaseValue = this.decreaseValue.bind(this);
  }
  changeView() {
    this.setState({ switchView: !this.state.switchView });
  }
  navigate = () => {
    window.location.reload()
  }
  increaseValue = (item) => {
    let berries_cart_1 = this.state.berries_cart_1;
    let berries_cart_2 = this.state.berries_cart_2;
    let berries_cart_3 = this.state.berries_cart_3;

    if(item === "berries_cart_1" && berries_cart_1 < 9){
      this.setState({
        berries_cart_1: berries_cart_1+1
      })
    }
    else if(item === "berries_cart_2" && berries_cart_2 < 9){
      this.setState({
        berries_cart_2: berries_cart_2+1
      })
    }
    else if(item === "berries_cart_3" && berries_cart_3 < 9){
      this.setState({
        berries_cart_3: berries_cart_3+1
      })
    }
  }
  decreaseValue = (item) => {
    let berries_cart_1 = this.state.berries_cart_1;
    let berries_cart_2 = this.state.berries_cart_2;
    let berries_cart_3 = this.state.berries_cart_3;

    if(item === "berries_cart_1" && berries_cart_1 > 0){
      this.setState({
        berries_cart_1: berries_cart_1-1
      })
    }
    else if(item === "berries_cart_2" && berries_cart_2 > 0){
      this.setState({
        berries_cart_2: berries_cart_2-1
      })
    }
    else if(item === "berries_cart_3" && berries_cart_3 > 0){
      this.setState({
        berries_cart_3: berries_cart_3-1
      })
    }
  }
  render() {
    return (
        <div className="container-box">
          <MetaTags>
            <title>Wiggly Cherry - Home</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
          </MetaTags>
          <div className="carousel_pc">
            <Carousel
                autoPlay={true}
                infinite={true}
                swipeable={false}
                draggable={false}
                autoPlaySpeed={2500}
                arrows={false}
                itemClass="image-item"
                responsive={responsive}
            >
                <img src={carousel_1} className="slider-img"/>
                <img src={carousel_2} className="slider-img"/>
                <img src={carousel_3} className="slider-img"/>
            </Carousel>
          </div>
          <div className="carousel_mobile">
            <Carousel
                autoPlay={true}
                infinite={true}
                swipeable={false}
                draggable={false}
                autoPlaySpeed={1600}
                arrows={false}
                itemClass="image-item"
                responsive={responsive}
            >
                <img src={carousel_1} className="slider-img"/>
                <img src={carousel_2} className="slider-img"/>
                <img src={carousel_3} className="slider-img"/>
            </Carousel>
          </div>
          <div className="home_categories_cards_pc">
            <div className="home_categories_card">
              <center>
                <img src={discount} className="home_categories_card_img"/>
                <p className="home_categories_card_txt">Discount</p>
              </center>
            </div>
            <div className="home_categories_card">
              <center>
                <img src={top_selling} className="home_categories_card_img"/>
                <p className="home_categories_card_txt">Top Selling</p>
              </center>
            </div>
            <div className="home_categories_card">
              <center>
                <img src={apple} className="home_categories_card_img"/>
                <p className="home_categories_card_txt">Stickers</p>
              </center>
            </div>
            <div className="home_categories_card">
              <center>
                <img src={cabbage} className="home_categories_card_img"/>
                <p className="home_categories_card_txt">Art Prints</p>
              </center>
            </div>
            <div className="home_categories_card">
              <center>
                <img src={dairy} className="home_categories_card_img"/>
                <p className="home_categories_card_txt">Packs</p>
              </center>
            </div>
            <div className="home_categories_card">
              <center>
                <img src={jar} className="home_categories_card_img"/>
                <p className="home_categories_card_txt">Commission</p>
              </center>
            </div>
          </div>
          <div className="home_categories_cards_mobile">
            <Carousel
                autoPlay={false}
                infinite={false}
                swipeable={true}
                draggable={true}
                arrows={false}
                responsive={cardsResponsive}
            >
              <div className="home_categories_card">
                <center>
                  <img src={discount} className="home_categories_card_img"/>
                  <p className="home_categories_card_txt">Discount</p>
                </center>
              </div>
              <div className="home_categories_card">
                <center>
                  <img src={top_selling} className="home_categories_card_img"/>
                  <p className="home_categories_card_txt">Top Selling</p>
                </center>
              </div>
              <div className="home_categories_card">
                <center>
                  <img src={apple} className="home_categories_card_img"/>
                  <p className="home_categories_card_txt">Stickers</p>
                </center>
              </div>
              <div className="home_categories_card">
                <center>
                  <img src={cabbage} className="home_categories_card_img"/>
                  <p className="home_categories_card_txt">Art Prints</p>
                </center>
              </div>
              <div className="home_categories_card">
                <center>
                  <img src={dairy} className="home_categories_card_img"/>
                  <p className="home_categories_card_txt">Packs</p>
                </center>
              </div>
              <div className="home_categories_card">
                <center>
                  <img src={jar} className="home_categories_card_img"/>
                  <p className="home_categories_card_txt">Commission</p>
                </center>
              </div>
            </Carousel>
          </div>
          <p className="home_title_topSellings">Top Sellings</p>
          <div className="home_slider_cards">
            <Carousel
                autoPlay={true}
                infinite={true}
                swipeable={false}
                draggable={false}
                autoPlaySpeed={1600}
                arrows={false}
                itemClass="image-item"
                responsive={categoriesResponsive}
            >
              <div className="home_slider_card">
                <center>
                  <img src="https://i.ibb.co/nsnm26N/20221111-100018.jpg" className="home_slider_card_img" />
                </center>
                <Row>
                  <Col md={8} sm={8} xs={8}>
                    <p className="home_slider_card_title">Apples</p>
                    <p className="home_slider_card_price">₹199<del className="cut_txt">₹250</del></p>
                  </Col>
                  <Col md={3} sm={3} xs={3}>
                    <FiHeart size={20} className="categories_icon"/>
                  </Col>
                </Row>
              </div>
              <div className="home_slider_card">
                <center>
                  <img src="https://i.ibb.co/sbwrWyR/20221113-124908.jpg" className="home_slider_card_img" />
                </center>
                <Row>
                  <Col md={8} sm={8} xs={8}>
                    <p className="home_slider_card_title">Bananas</p>
                    <p className="home_slider_card_price">₹69<del className="cut_txt">₹80</del></p>
                  </Col>
                  <Col md={3} sm={3} xs={3}>
                    <FiHeart size={20} className="categories_icon"/>
                  </Col>
                </Row>
              </div>
              <div className="home_slider_card">
                <center>
                  <img src="https://i.ibb.co/MMy3Z3J/20221102-100721-1.jpg" className="home_slider_card_img" />
                </center>
                <Row>
                  <Col md={8} sm={8} xs={8}>
                    <p className="home_slider_card_title">Cauliflower</p>
                    <p className="home_slider_card_price">₹99<del className="cut_txt">₹120</del></p>
                  </Col>
                  <Col md={3} sm={3} xs={3}>
                    <FiHeart size={20} className="categories_icon"/>
                  </Col>
                </Row>
              </div>
              <div className="home_slider_card">
                <center>
                  <img src="https://i.ibb.co/v12P1kJ/20221111-103930.jpg" className="home_slider_card_img" />
                </center>
                <Row>
                  <Col md={8} sm={8} xs={8}>
                    <p className="home_slider_card_title">Tomatoes</p>
                    <p className="home_slider_card_price">₹65<del className="cut_txt">₹70</del></p>
                  </Col>
                  <Col md={3} sm={3} xs={3}>
                    <FiHeart size={20} className="categories_icon"/>
                  </Col>
                </Row>
              </div>
              <div className="home_slider_card">
                <center>
                  <img src="https://i.ibb.co/K0nwjDr/20221111-095908.jpg" className="home_slider_card_img" />
                </center>
                <Row>
                  <Col md={8} sm={8} xs={8}>
                    <p className="home_slider_card_title">Pumpkin</p>
                    <p className="home_slider_card_price">₹55<del className="cut_txt">₹80</del></p>
                  </Col>
                  <Col md={3} sm={3} xs={3}>
                    <FiHeart size={20} className="categories_icon"/>
                  </Col>
                </Row>
              </div>
              <div className="home_slider_card">
                <center>
                  <img src="https://i.ibb.co/RY3Yx3P/20221102-102247-1.jpg" className="home_slider_card_img" />
                </center>
                <Row>
                  <Col md={8} sm={8} xs={8}>
                    <p className="home_slider_card_title">Capsicum</p>
                    <p className="home_slider_card_price">₹49<del className="cut_txt">₹60</del></p>
                  </Col>
                  <Col md={3} sm={3} xs={3}>
                    <FiHeart size={20} className="categories_icon"/>
                  </Col>
                </Row>
              </div>
            </Carousel>
          </div>
          <div className="home_slider_cards_mobile">
            <Row>
              <Col md={6} xs={6} sm={6}>
                <div className="home_slider_cards_mobile_card">
                  <center>
                    <img src="https://i.ibb.co/nsnm26N/20221111-100018.jpg" className="home_slider_cards_mobile_card_img" />
                  </center>
                  <Row>
                    <Col md={8} sm={8} xs={8}>
                      <p className="home_slider_card_title">Apples</p>
                      <p className="home_slider_card_price">₹199<del className="cut_txt">₹250</del></p>
                    </Col>
                    <Col md={3} sm={3} xs={3}>
                      <FiHeart size={20} className="categories_icon"/>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={6} xs={6} sm={6}>
                <div className="home_slider_cards_mobile_card">
                  <center>
                    <img src="https://i.ibb.co/sbwrWyR/20221113-124908.jpg" className="home_slider_cards_mobile_card_img" />
                  </center>
                  <Row>
                    <Col md={8} sm={8} xs={8}>
                      <p className="home_slider_card_title">Bananas</p>
                      <p className="home_slider_card_price">₹69<del className="cut_txt">₹80</del></p>
                    </Col>
                    <Col md={3} sm={3} xs={3}>
                      <FiHeart size={20} className="categories_icon"/>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={6} sm={6}>
                <div className="home_slider_cards_mobile_card">
                  <center>
                    <img src="https://i.ibb.co/MMy3Z3J/20221102-100721-1.jpg" className="home_slider_cards_mobile_card_img" />
                  </center>
                  <Row>
                    <Col md={8} sm={8} xs={8}>
                      <p className="home_slider_card_title">Cauliflower</p>
                      <p className="home_slider_card_price">₹99<del className="cut_txt">₹120</del></p>
                    </Col>
                    <Col md={3} sm={3} xs={3}>
                      <FiHeart size={20} className="categories_icon"/>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={6} xs={6} sm={6}>
                <div className="home_slider_cards_mobile_card">
                  <center>
                    <img src="https://i.ibb.co/v12P1kJ/20221111-103930.jpg" className="home_slider_cards_mobile_card_img" />
                  </center>
                  <Row>
                    <Col md={8} sm={8} xs={8}>
                      <p className="home_slider_card_title">Tomatoes</p>
                      <p className="home_slider_card_price">₹65<del className="cut_txt">₹70</del></p>
                    </Col>
                    <Col md={3} sm={3} xs={3}>
                      <FiHeart size={20} className="categories_icon"/>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={6} xs={6} sm={6}>
                <div className="home_slider_cards_mobile_card">
                  <center>
                    <img src="https://i.ibb.co/K0nwjDr/20221111-095908.jpg" className="home_slider_cards_mobile_card_img" />
                  </center>
                  <Row>
                    <Col md={8} sm={8} xs={8}>
                      <p className="home_slider_card_title">Pumpkin</p>
                      <p className="home_slider_card_price">₹55<del className="cut_txt">₹80</del></p>
                    </Col>
                    <Col md={3} sm={3} xs={3}>
                      <FiHeart size={20} className="categories_icon"/>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col md={6} xs={6} sm={6}>
                <div className="home_slider_cards_mobile_card">
                  <center>
                    <img src="https://i.ibb.co/RY3Yx3P/20221102-102247-1.jpg" className="home_slider_cards_mobile_card_img" />
                  </center>
                  <Row>
                    <Col md={8} sm={8} xs={8}>
                      <p className="home_slider_card_title">Capsicum</p>
                      <p className="home_slider_card_price">₹49<del className="cut_txt">₹60</del></p>
                    </Col>
                    <Col md={3} sm={3} xs={3}>
                      <FiHeart size={20} className="categories_icon"/>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </div>
          <div className="veggies_slider_div">
            <Row>
              <Col md={8} sm={12} xs={12}>
                <div className="berries_div_2">
                  <Carousel
                    autoPlay={false}
                    infinite={true}
                    autoPlaySpeed={1600}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    responsive={berriesResponsive}
                  >
                    <div className="berries_box_2">
                      <div className="berries_box_2-inner">
                        <center>
                          <img src="https://i.ibb.co/PGFCt50/cauliflower.png" className="home_slider_card_img" />
                        </center>
                        <Row>
                          <Col md={8} sm={8} xs={8}>
                            <p className="home_slider_card_title">Cauliflower</p>
                            <p className="home_slider_card_price">₹99<del className="cut_txt">₹120</del></p>
                          </Col>
                          <Col md={3} sm={3} xs={3}>
                            <FiHeart size={20} className="categories_icon"/>
                          </Col>
                        </Row>
                        <p className="use_coupon_home">Use coupon for 5% off</p>
                        <div className="coupon_div">
                          <span className="coupon_home">VEGGIESNEW5</span>
                        </div>
                        <br/>
                        <Row>
                          <Col md={5} xs={5} sm={5}>
                            <FiMinusCircle size={29} className="substract_icon" onClick={() => this.decreaseValue("berries_cart_1")}/>
                            <text className="cartValue">{this.state.berries_cart_1}</text>
                            <BsFillPlusCircleFill size={26} className="add_icon" onClick={() => this.increaseValue("berries_cart_1")}/>
                          </Col>
                          <Col md={7} xs={7} sm={7}>
                            <button
                              className="addToCart_home"
                            >
                              Add To Cart
                            </button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="berries_box_2">
                      <div className="berries_box_2-inner">
                        <center>
                          <img src="https://i.ibb.co/5BWFKkD/pumpkin.png" className="home_slider_card_img" />
                        </center>
                        <Row>
                          <Col md={8} sm={8} xs={8}>
                            <p className="home_slider_card_title">Pumpkin</p>
                            <p className="home_slider_card_price">₹55<del className="cut_txt">₹80</del></p>
                          </Col>
                          <Col md={3} sm={3} xs={3}>
                            <FiHeart size={20} className="categories_icon"/>
                          </Col>
                        </Row>
                        <p className="use_coupon_home">Use coupon for 5% off</p>
                        <div className="coupon_div">
                          <span className="coupon_home">VEGGIESNEW5</span>
                        </div>
                        <br/>
                        <Row>
                          <Col md={5} xs={5} sm={5}>
                            <FiMinusCircle size={29} className="substract_icon" onClick={() => this.decreaseValue("berries_cart_2")}/>
                            <text className="cartValue">{this.state.berries_cart_2}</text>
                            <BsFillPlusCircleFill size={26} className="add_icon" onClick={() => this.increaseValue("berries_cart_2")}/>
                          </Col>
                          <Col md={7} xs={7} sm={7}>
                            <button
                              className="addToCart_home"
                            >
                              Add To Cart
                            </button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="berries_box_2">
                      <div className="berries_box_2-inner">
                        <center>
                          <img src="https://i.ibb.co/Fw460wc/capsicum.png" className="home_slider_card_img" />
                        </center>
                        <Row>
                          <Col md={8} sm={8} xs={8}>
                            <p className="home_slider_card_title">Capsicum</p>
                            <p className="home_slider_card_price">₹49<del className="cut_txt">₹60</del></p>
                          </Col>
                          <Col md={3} sm={3} xs={3}>
                            <FiHeart size={20} className="categories_icon"/>
                          </Col>
                        </Row>
                        <p className="use_coupon_home">Use coupon for 5% off</p>
                        <div className="coupon_div">
                          <span className="coupon_home">VEGGIESNEW5</span>
                        </div>
                        <br/>
                        <Row>
                          <Col md={5} xs={5} sm={5}>
                            <FiMinusCircle size={29} className="substract_icon" onClick={() => this.decreaseValue("berries_cart_3")}/>
                            <text className="cartValue">{this.state.berries_cart_3}</text>
                            <BsFillPlusCircleFill size={26} className="add_icon" onClick={() => this.increaseValue("berries_cart_3")}/>
                          </Col>
                          <Col md={7} xs={7} sm={7}>
                            <button
                              className="addToCart_home"
                            >
                              Add To Cart
                            </button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="berries_box_2">
                      <div className="berries_box_2-inner">
                        <center>
                          <img src="https://i.ibb.co/hKy8GRw/brinjal.png" className="home_slider_card_img" />
                        </center>
                        <Row>
                          <Col md={8} sm={8} xs={8}>
                            <p className="home_slider_card_title">Brinjal</p>
                            <p className="home_slider_card_price">₹45<del className="cut_txt">₹49</del></p>
                          </Col>
                          <Col md={3} sm={3} xs={3}>
                            <FiHeart size={20} className="categories_icon"/>
                          </Col>
                        </Row>
                        <p className="use_coupon_home">Use coupon for 5% off</p>
                        <div className="coupon_div">
                          <span className="coupon_home">VEGGIESNEW5</span>
                        </div>
                        <br/>
                        <Row>
                          <Col md={5} xs={5} sm={5}>
                            <FiMinusCircle size={29} className="substract_icon" onClick={() => this.decreaseValue("berries_cart_1")}/>
                            <text className="cartValue">{this.state.berries_cart_1}</text>
                            <BsFillPlusCircleFill size={26} className="add_icon" onClick={() => this.increaseValue("berries_cart_1")}/>
                          </Col>
                          <Col md={7} xs={7} sm={7}>
                            <button
                              className="addToCart_home"
                            >
                              Add To Cart
                            </button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="berries_box_2">
                      <div className="berries_box_2-inner">
                        <center>
                          <img src="https://i.ibb.co/WH7tQLp/karela.pngg" className="home_slider_card_img" />
                        </center>
                        <Row>
                          <Col md={8} sm={8} xs={8}>
                            <p className="home_slider_card_title">Karela</p>
                            <p className="home_slider_card_price">₹54<del className="cut_txt">₹65</del></p>
                          </Col>
                          <Col md={3} sm={3} xs={3}>
                            <FiHeart size={20} className="categories_icon"/>
                          </Col>
                        </Row>
                        <p className="use_coupon_home">Use coupon for 5% off</p>
                        <div className="coupon_div">
                          <span className="coupon_home">VEGGIESNEW5</span>
                        </div>
                        <br/>
                        <Row>
                          <Col md={5} xs={5} sm={5}>
                            <FiMinusCircle size={29} className="substract_icon" onClick={() => this.decreaseValue("berries_cart_2")}/>
                            <text className="cartValue">{this.state.berries_cart_2}</text>
                            <BsFillPlusCircleFill size={26} className="add_icon" onClick={() => this.increaseValue("berries_cart_2")}/>
                          </Col>
                          <Col md={7} xs={7} sm={7}>
                            <button
                              className="addToCart_home"
                            >
                              Add To Cart
                            </button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </Col>
              <Col md={4} sm={12} xs={12}>
                <div className="berries_div_1">
                  <center>
                    <div class="berries_box_1">
                      <div className="berries_box_1-inner">
                        <p className="berries-box-text-title">Fresh Organic Veggies</p>
                        <p className="berries-box-text-subtitle">Our vegetables are fresh and organic, hand plucked from the local farms and shipped directly at your doorstep.</p>
                        <button
                          className="requestSolution"
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </center>
                </div>
              </Col>
            </Row>
          </div>
          <p className="home_title_topSellings">Why Choose Organic Nagaland</p>
          <div className="home-whychoose-carousel-div">
            <Row>
              <Col md={4}>
                <div className="page-container">
                    <BlogCard cardImage={slider_1} cardText={"100% Organic"} cardText2={"Fruits & Vegtables"} backText={"This is some demo text which shall be replaced later on during development of the web app. Thank you! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. "}/>
                </div>
              </Col>
              <Col md={4}>
                <div className="page-container">
                    <BlogCard cardImage={slider_2} cardText={"Get delivered"} cardText2={"right at your doorstep"} backText={"This is some demo text which shall be replaced later on during development of the web app. Thank you! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. "}/>
                </div>
              </Col>
              <Col md={4}>
                <div className="page-container">
                    <BlogCard cardImage={slider_3} cardText={"Hand picked"} cardText2={"from the local farms"} backText={"This is some demo text which shall be replaced later on during development of the web app. Thank you! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. "}/>
                </div>
              </Col>
            </Row>
          </div>
          <div className="home-whychoose-carousel-div_mobile">
          <Carousel
                autoPlay={false}
                infinite={true}
                autoPlaySpeed={1600}
                arrows={false}
                itemClass="image-item"
                responsive={responsive}
            >
                <div className="page-container">
                    <BlogCard cardImage={slider_1} cardText={"100% Organic"} cardText2={"Fruits & Vegtables"} backText={"This is some demo text which shall be replaced later on during development of the web app. Thank you! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. "}/>
                </div>
                <div className="page-container">
                    <BlogCard cardImage={slider_2} cardText={"Get delivered"} cardText2={"right at your doorstep"} backText={"This is some demo text which shall be replaced later on during development of the web app. Thank you! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. "}/>
                </div>
                <div className="page-container">
                    <BlogCard cardImage={slider_3} cardText={"Hand picked"} cardText2={"from the local farms"} backText={"This is some demo text which shall be replaced later on during development of the web app. Thank you! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. "}/>
                </div>
            </Carousel>
          </div>
          <div className="berries_slider_div">
            <Row>
              <Col md={4} sm={12} xs={12}>
                <div className="berries_div_1">
                  <center>
                    <div class="berries_box_1">
                      <div className="berries_box_1-inner">
                        <p className="berries-box-text-title">Order Fresh Berries</p>
                        <p className="berries-box-text-subtitle">Our berries are fresh and organic, hand plucked from the local farms and shipped directly at your doorstep.</p>
                        <button
                          className="requestSolution"
                        >
                          Explore
                        </button>
                      </div>
                    </div>
                  </center>
                </div>
              </Col>
              <Col md={8} sm={12} xs={12}>
                <div className="berries_div_2">
                  <Carousel
                    autoPlay={false}
                    infinite={true}
                    autoPlaySpeed={1600}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                    responsive={berriesResponsive}
                  >
                    <div className="berries_box_2">
                      <div className="berries_box_2-inner">
                        <center>
                          <img src="https://i.ibb.co/N2NCyzL/strawberry.png" className="home_slider_card_img" />
                        </center>
                        <Row>
                          <Col md={8} sm={8} xs={8}>
                            <p className="home_slider_card_title">Strawberries</p>
                            <p className="home_slider_card_price">₹199<del className="cut_txt">₹250</del></p>
                          </Col>
                          <Col md={3} sm={3} xs={3}>
                            <FiHeart size={20} className="categories_icon"/>
                          </Col>
                        </Row>
                        <p className="use_coupon_home">Use coupon for 5% off</p>
                        <div className="coupon_div">
                          <span className="coupon_home">BERRIESNEW5</span>
                        </div>
                        <br/>
                        <Row>
                          <Col md={5} xs={5} sm={5}>
                            <FiMinusCircle size={29} className="substract_icon" onClick={() => this.decreaseValue("berries_cart_1")}/>
                            <text className="cartValue">{this.state.berries_cart_1}</text>
                            <BsFillPlusCircleFill size={26} className="add_icon" onClick={() => this.increaseValue("berries_cart_1")}/>
                          </Col>
                          <Col md={7} xs={7} sm={7}>
                            <button
                              className="addToCart_home"
                            >
                              Add To Cart
                            </button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="berries_box_2">
                      <div className="berries_box_2-inner">
                        <center>
                          <img src="https://i.ibb.co/3fgZt7p/rasberry.png" className="home_slider_card_img" />
                        </center>
                        <Row>
                          <Col md={8} sm={8} xs={8}>
                            <p className="home_slider_card_title">Rasberry</p>
                            <p className="home_slider_card_price">₹329<del className="cut_txt">₹359</del></p>
                          </Col>
                          <Col md={3} sm={3} xs={3}>
                            <FiHeart size={20} className="categories_icon"/>
                          </Col>
                        </Row>
                        <p className="use_coupon_home">Use coupon for 5% off</p>
                        <div className="coupon_div">
                          <span className="coupon_home">BERRIESNEW5</span>
                        </div>
                        <br/>
                        <Row>
                          <Col md={5} xs={5} sm={5}>
                            <FiMinusCircle size={29} className="substract_icon" onClick={() => this.decreaseValue("berries_cart_2")}/>
                            <text className="cartValue">{this.state.berries_cart_2}</text>
                            <BsFillPlusCircleFill size={26} className="add_icon" onClick={() => this.increaseValue("berries_cart_2")}/>
                          </Col>
                          <Col md={7} xs={7} sm={7}>
                            <button
                              className="addToCart_home"
                            >
                              Add To Cart
                            </button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="berries_box_2">
                      <div className="berries_box_2-inner">
                        <center>
                          <img src="https://i.ibb.co/vqycWxT/blueberry.png" className="home_slider_card_img" />
                        </center>
                        <Row>
                          <Col md={8} sm={8} xs={8}>
                            <p className="home_slider_card_title">Blueberries</p>
                            <p className="home_slider_card_price">₹299<del className="cut_txt">₹365</del></p>
                          </Col>
                          <Col md={3} sm={3} xs={3}>
                            <FiHeart size={20} className="categories_icon"/>
                          </Col>
                        </Row>
                        <p className="use_coupon_home">Use coupon for 5% off</p>
                        <div className="coupon_div">
                          <span className="coupon_home">BERRIESNEW5</span>
                        </div>
                        <br/>
                        <Row>
                          <Col md={5} xs={5} sm={5}>
                            <FiMinusCircle size={29} className="substract_icon" onClick={() => this.decreaseValue("berries_cart_3")}/>
                            <text className="cartValue">{this.state.berries_cart_3}</text>
                            <BsFillPlusCircleFill size={26} className="add_icon" onClick={() => this.increaseValue("berries_cart_3")}/>
                          </Col>
                          <Col md={7} xs={7} sm={7}>
                            <button
                              className="addToCart_home"
                            >
                              Add To Cart
                            </button>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Carousel>
                </div>
              </Col>
            </Row>
          </div>
          <div className="footer_forpc">
            <Footer/>
          </div>
          <div className="bottom_tab">
            <Tabs/>
          </div>
        </div>
    );
  }
}
class BlogCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flipped: false };
    this.flip = this.flip.bind(this);
  }

  flip = () => {
    this.setState({ flipped: !this.state.flipped });
  }
  render() {
    return (
      <div onMouseEnter={this.flip} onMouseLeave={this.flip} className={"card-container" + (this.state.flipped ? " flipped" : "")}>
        <Front cardImage={this.props.cardImage} cardText={this.props.cardText} cardText2={this.props.cardText2}/>
        <Back backText={this.props.backText}/>
      </div>

    )
  }
}

class Front extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="front">
        <ImageArea cardImage={this.props.cardImage}/>
        <MainArea cardText={this.props.cardText} cardText2={this.props.cardText2}/>
      </div>
    )
  }
}

class Back extends React.Component {
  render() {
    return (
      <div className="back prod-cards-hover-back-div">
        <p className="prod-cards-hover-back">{this.props.backText}</p>
        <center>
          <Link to="/neometry">
            <button
              className="cards-products-visit-site"
            >
              Read more
            </button>
          </Link>
        </center>
      </div>
    )
  }
}

class ImageArea extends React.Component {
  render() {
    return (
      <div className="image-container">
        <img className="card-image" src={this.props.cardImage}></img>
      </div>
    )
  }

}

class MainArea extends React.Component {
  render() {
    return (
      <div className="main-area">
        <div className="blog-post">
          <p className="title">{this.props.cardText}</p>
          <p className="title">{this.props.cardText2}</p>
        </div>
      </div>
    )
  }
}
export default withRouter(home);