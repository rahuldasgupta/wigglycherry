import React from "react";
import { withRouter } from "react-router-dom";
import "./footer.css";
import { Link } from "react-router-dom";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { BsChevronDown } from "react-icons/bs";

import twitter_black from "../../assets/twitter_black.png";
import discord_black from "../../assets/discord_black.png";
import youtube from "../../assets/youtube.png";
import tiktok from "../../assets/tiktok.png";
import facebook from "../../assets/facebook.png";
import linkedin_black from "../../assets/linkedin_black.png";

class Footer extends React.Component {
  render() {
    return (
        <>
            <div className="footer_main">
                <hr className="footer_hr"/>
                <Row>
                    <Col md={4} xs={12} sm={12}>
                        <span className="footer_english">English<BsChevronDown size={13} className="BsChevronDown-footer"/></span>
                        <span className="footer_englishMargins">Privacy Policy</span>
                        <span className="footer_englishMargins">Terms</span>
                    </Col>
                    <Col xs={12} sm={12}>
                        <div className="icons_footer_float">
                            <img src={twitter_black} className="twitter_black"/>
                            <img src={discord_black} className="twitter_black"/>
                            <img src={youtube} className="twitter_black"/>
                            <img src={tiktok} className="twitter_black"/>
                            <img src={facebook} className="twitter_black"/>
                            <img src={linkedin_black} className="linkedIn_black"/>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="blur_footer">
                <p className="blur_footer_txt">© 2022 Verity Verification Corporation. All Rights Reserved.</p>
            </div>
        </>
    );
  }
}

export default withRouter(Footer);
