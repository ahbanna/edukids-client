import React from "react";
import "./SocialLink.css";
import {
  FaTwitter,
  FaBehance,
  FaInstagram,
  FaDribbble,
  FaGoogle,
} from "react-icons/fa";
const SocialLink = () => {
  return (
    <div className="social-link">
      <ul className="social-icon">
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
      </ul>
    </div>
  );
};

export default SocialLink;
