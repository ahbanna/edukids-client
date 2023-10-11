import React from "react";
import "./HeaderTop.css";
import { FaRegClock, FaRegEnvelope, FaPhoneAlt } from "react-icons/fa";
import SocialLink from "../Shared/SocialLink/SocialLink";

const HeaderTop = () => {
  return (
    <div className="header-top">
      <div className="container">
        <div className="header-top-content">
          <div className="header-top-info">
            <ul>
              <li>
                <FaRegClock></FaRegClock> Mon-Thus 9.00-17.00
              </li>
              <li>
                <a href="tel:+8801723659531">
                  <FaPhoneAlt></FaPhoneAlt> (+880)1723659531
                </a>
              </li>
              <li>
                <a href="mailto:alhasanulbanna@gmail.com">
                  <FaRegEnvelope></FaRegEnvelope> info@gmail.com
                </a>
              </li>
            </ul>
          </div>
          <div className="header-top-social">
            <SocialLink></SocialLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
