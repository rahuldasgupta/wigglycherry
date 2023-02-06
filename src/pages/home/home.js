import React from "react";
import { withRouter, Link } from "react-router-dom";
import Carousel from 'react-multi-carousel';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import MetaTags from 'react-meta-tags';

//Images
import carousel_1 from "../../assets/carousel_1.jpg";
import carousel_2 from "../../assets/carousel_2.jpg";
import instagram from "../../assets/instagram.png";

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
      items: 4,
      paritialVisibilityGutter: 0
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
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
      IGCard1: false,
      IGCard2: false,
      IGCard3: false,
      IGCard4: false,
      IGCard5: false,
      IGCard6: false
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
                autoPlaySpeed={3500}
                arrows={false}
                itemClass="image-item"
                responsive={responsive}
            >   
                <img src={carousel_2} className="slider-img"/>
                <img src={carousel_1} className="slider-img"/>
                
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
                <img src={carousel_2} className="slider-img"/>
                <img src={carousel_1} className="slider-img"/>
            </Carousel>
          </div>
          <p className="home_title_topSellings">Top Sellings</p>
          <div className="home_slider_cards">
            <Carousel
                autoPlay={true}
                infinite={true}
                swipeable={false}
                draggable={false}
                autoPlaySpeed={2000}
                arrows={false}
                itemClass="image-item"
                responsive={categoriesResponsive}
            >
              <div className="home_slider_card">
                <center>
                  <img src="https://i.ibb.co/nsnm26N/20221111-100018.jpg" className="home_slider_card_img" />
                </center>
              </div>
              <div className="home_slider_card">
                <center>
                  <img src="https://i.ibb.co/sbwrWyR/20221113-124908.jpg" className="home_slider_card_img" />
                </center>
              </div>
              <div className="home_slider_card">
                <center>
                  <img src="https://i.ibb.co/MMy3Z3J/20221102-100721-1.jpg" className="home_slider_card_img" />
                </center>
              </div>
              <div className="home_slider_card">
                <center>
                  <img src="https://i.ibb.co/v12P1kJ/20221111-103930.jpg" className="home_slider_card_img" />
                </center>
              </div>
              <div className="home_slider_card">
                <center>
                  <img src="https://i.ibb.co/K0nwjDr/20221111-095908.jpg" className="home_slider_card_img" />
                </center>
              </div>
              <div className="home_slider_card">
                <center>
                  <img src="https://i.ibb.co/RY3Yx3P/20221102-102247-1.jpg" className="home_slider_card_img" />
                </center>
              </div>
            </Carousel>
          </div>
          <p className="viewCollection">View Collection</p>
          <p className="home_title_topSellings">Categories</p>
          <div className="hero-section">
            <div className="card-grid">
              <a className="card" href="#">
                <div className="card__background bg1"></div>
                <div className="card__content">
                  <span className="btn_Headers">Best Sellers</span>
                  <br/>
                  <span className="btn_Margins">VIEW PRODUCTS</span>
                  <button className="btn">
                    <svg width="180px" height="60px" viewBox="0 0 180 60" className="border" style={{marginLeft: 35, marginTop: 50}}>
                      <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                      <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                    </svg>
                    
                  </button>
                </div>
              </a>
              <a className="card" href="#">
                <div className="card__background bg2"></div>
                <div className="card__content">
                  <span className="btn_Headers">Custom Orders</span>
                  <br/>
                  <span className="btn_Margins">VIEW PRODUCTS</span>
                    <button className="btn">
                      <svg width="180px" height="60px" viewBox="0 0 180 60" className="border" style={{marginLeft: 35, marginTop: 50}}>
                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                        <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                      </svg>
                      
                    </button>
                </div>
              </a>
              <a className="card" href="#">
                <div className="card__background bg3"></div>
                <div className="card__content">
                  <span className="btn_Headers">New Arrivals</span>
                  <br/>
                  <span className="btn_Margins">VIEW PRODUCTS</span>
                  <button className="btn">
                    <svg width="180px" height="60px" viewBox="0 0 180 60" className="border" style={{marginLeft: 35, marginTop: 50}}>
                      <polyline points="179,1 179,59 1,59 1,1 179,1" className="bg-line" />
                      <polyline points="179,1 179,59 1,59 1,1 179,1" className="hl-line" />
                    </svg>
                  </button>
                </div>
              </a>
            </div>
          </div>
          <p className="home_title_topSellings">Follow us on Instagram</p>
          <Row className="instaMargins">
            <Col md={4}>
              <div className="instaOuter_1" onMouseEnter={()=>this.setState({IGCard1: true, IGCard2: false, IGCard3: false, IGCard4: false, IGCard5: false, IGCard6:false})} onMouseLeave={()=>this.setState({IGCard1: false, IGCard2: false, IGCard3: false, IGCard4: false, IGCard5: false, IGCard6:false})}>
                <div className="instaImage_Inner">
                  <center>
                    {
                      this.state.IGCard1 ?
                        <img src={instagram} className="homeIG"/>
                      :
                        <></>
                    }
                  </center>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="instaOuter_2" onMouseEnter={()=>this.setState({IGCard1: false, IGCard2: true, IGCard3: false, IGCard4: false, IGCard5: false, IGCard6:false})} onMouseLeave={()=>this.setState({IGCard1: false, IGCard2: false, IGCard3: false, IGCard4: false, IGCard5: false, IGCard6:false})}>
                <div className="instaImage_Inner">
                  <center>
                    {
                      this.state.IGCard2 ?
                        <img src={instagram} className="homeIG"/>
                      :
                        <></>
                    }
                  </center>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="instaOuter_3" onMouseEnter={()=>this.setState({IGCard1: false, IGCard2: false, IGCard3: true, IGCard4: false, IGCard5: false, IGCard6:false})} onMouseLeave={()=>this.setState({IGCard1: false, IGCard2: false, IGCard3: false, IGCard4: false, IGCard5: false, IGCard6:false})}>
                <div className="instaImage_Inner">
                  <center>
                    {
                      this.state.IGCard3 ?
                        <img src={instagram} className="homeIG"/>
                      :
                        <></>
                    }
                  </center>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="instaMargins">
            <Col md={4}>
              <div className="instaOuter_4" onMouseEnter={()=>this.setState({IGCard1: false, IGCard2: false, IGCard3: false, IGCard4: true, IGCard5: false, IGCard6:false})} onMouseLeave={()=>this.setState({IGCard1: false, IGCard2: false, IGCard3: false, IGCard4: false, IGCard5: false, IGCard6:false})}>
                <div className="instaImage_Inner">
                  <center>
                    {
                      this.state.IGCard4 ?
                        <img src={instagram} className="homeIG"/>
                      :
                        <></>
                    }
                  </center>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="instaOuter_5" onMouseEnter={()=>this.setState({IGCard1: false, IGCard2: false, IGCard3: false, IGCard4: false, IGCard5: true, IGCard6:false})} onMouseLeave={()=>this.setState({IGCard1: false, IGCard2: false, IGCard3: false, IGCard4: false, IGCard5: false, IGCard6:false})}>
                <div className="instaImage_Inner">
                  <center>
                    {
                      this.state.IGCard5 ?
                        <img src={instagram} className="homeIG"/>
                      :
                        <></>
                    }
                  </center>
                </div>
              </div>
            </Col>
            <Col md={4}>
              <div className="instaOuter_6" onMouseEnter={()=>this.setState({IGCard1: false, IGCard2: false, IGCard3: false, IGCard4: false, IGCard5: false, IGCard6:true})} onMouseLeave={()=>this.setState({IGCard1: false, IGCard2: false, IGCard3: false, IGCard4: false, IGCard5: false, IGCard6:false})}>
                <div className="instaImage_Inner">
                  <center>
                    {
                      this.state.IGCard6 ?
                        <img src={instagram} className="homeIG"/>
                      :
                        <></>
                    }
                  </center>
                </div>
              </div>
            </Col>
          </Row>
        </div>
    );
  }
}
export default withRouter(home);