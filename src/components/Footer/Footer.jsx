import React from "react";
import "./Footer.css";
import SocialLink from "../Shared/SocialLink/SocialLink";
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import payImg from "../../assets/footer/pay.png";
import footerGirlImg from "../../assets/footer/footer-girl.avif";
import ballImg from "../../assets/footer/ball.png";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row footer-main">
          <div className="col-lg-4">
            <h3>About EduKids</h3>
            <p>
              We believe that education can be fun, engaging, and exciting. Our
              mission is to provide a wide range of high-quality educational
              toys that not only entertain but also inspire young minds.
            </p>
            <div className="footer-social">
              <h4>Follow us :</h4>
              <SocialLink></SocialLink>
              {/* <ul className="social-icon">
                <li>
                  <a href="https://twitter.com/home">
                    <FaTwitter></FaTwitter>
                  </a>
                </li>
                <li>
                  <a href="https://www.behance.net/">
                    <FaBehance></FaBehance>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/">
                    <FaInstagram></FaInstagram>
                  </a>
                </li>
                <li>
                  <a href="https://dribbble.com/">
                    <FaDribbble></FaDribbble>
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/account/about/">
                    <FaGoogle></FaGoogle>
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
          <div className="col-lg-4">
            <div className="footer-contact">
              <h3>Get in touch</h3>
              <ul>
                <li>
                  <IoHome></IoHome> Saya Bithi, H#10, R#12
                </li>
                <li className="loaction"> Dhaka, Bangladesh</li>
                <li>
                  <a href="tel:+8801723659531">
                    <FaPhoneAlt></FaPhoneAlt> Phone: +88 01911 000 000
                  </a>
                </li>
                <li>
                  <a href="mailto:alhasanulbanna@gmail.com">
                    <FaRegEnvelope></FaRegEnvelope> Email:
                    alhasanulbanna@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 footer-subscribe">
            <h3>Keep in touch</h3>
            {/* <form action="">
              <input type="text" name="" id="" placeholder="Enter Your Email" />
              <div className="submit-btn">
                <input type="submit" value="Subscribe Now" />
              </div>
            </form> */}
            <SocialLink></SocialLink>
          </div>
        </div>
        <div className="footer-gril">
          <img src={footerGirlImg} alt="" srcset="" />
        </div>
        <div className="footer-ball">
          <img src={ballImg} alt="" srcset="" />
        </div>
        <div className="footer-bottom">
          <div className="copyright-text">
            <p>© 2023 EduKids. All rights reserved.</p>
          </div>
          <div className="payment-method">
            <img src={payImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
