import React from "react";
import "./Footer.css";
import SocialLink from "../Shared/SocialLink/SocialLink";
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt, FaRegEnvelope } from "react-icons/fa";
import payImg from "../../assets/footer/pay.png";
import footerGirlImg from "../../assets/footer/footer-girl.avif";
import ballImg from "../../assets/footer/ball.png";
import { NavLink } from "react-bootstrap";

const Footer = () => {
  return (
    <div className="footer-area">
      <div className="container">
        <div className="row footer-main">
          <div className="col-lg-4 col-md-4">
            <h3>About EduKids</h3>
            <p>
              We believe that education can be fun, engaging, and exciting. Our
              mission is to provide a wide range of high-quality educational
              toys that not only entertain but also inspire young minds.
            </p>
            <div className="footer-social">
              {/* <h4>Follow us :</h4>
              <SocialLink></SocialLink> */}
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
          <div className="col-lg-4 col-md-5">
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
          <div className="col-lg-4 col-md-3  ">
            <div className="quick-link">
              <h3>Quick Links</h3>
              <div>
                <ul>
                  <li>
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/blog">Blog</NavLink>
                  </li>
                  <li>
                    <NavLink to="/alltoys">Collection</NavLink>
                  </li>
                </ul>
              </div>
              <div className="footer-social">
                <SocialLink></SocialLink>
              </div>
            </div>
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
