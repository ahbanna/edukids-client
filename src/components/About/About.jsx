// import React, { useEffect } from "react";
// import "./About.css";
// import Aos from "aos";
// import "aos/dist/aos.css";

// const About = () => {
//   useEffect(() => {
//     Aos.init({ duration: 2000 });
//   }, []);
//   return (
//     <div className="about-area">
//       <div className="container">
//         <div className="section-title">
//           <p>Know Everything</p>
//           <h3>About Us</h3>
//         </div>
//         <div className="row">
//           <div className="col-lg-6 about-content">
//             <p>
//               Our mission is to inspire young minds and foster their growth
//               through play. We understand the importance of early childhood
//               development and the role that toys play in shaping a child's
//               learning journey. That's why we handpick each toy in our
//               collection to ensure it not only entertains but also stimulates
//               cognitive, motor, and social skills.
//             </p>
//             <p>
//               We believe in the power of play to shape young minds and prepare
//               children for a bright future. Join us on this exciting journey of
//               exploration, discovery, and learning with our exceptional
//               collection of educational toys. Together, let's inspire the next
//               generation of thinkers, creators, and innovators.
//             </p>
//             <p>Start your child's educational adventure with us today!</p>
//             <div className="contact-btn">
//               <button>Contact Us</button>
//             </div>
//           </div>
//           <div className="col-lg-6 about-img" data-aos="zoom-in-left">
//             {/* <img src={about} alt="" /> */}
//             <img
//               src="https://images.pexels.com/photos/8535144/pexels-photo-8535144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import { Container } from "react-bootstrap";
import aboutImg from "../../assets/about/about-img.png";
import quote from "../../assets/about/quote.png";
import "./About.css";
import { FaAward } from "react-icons/fa";

const About = () => {
  return (
    <div className="about-area">
      <Container>
        <div className="about-img">
          <img src={aboutImg} alt="" srcset="" />
        </div>
        <div className="about-content">
          <div className="about-title">
            <span>About Edukids</span>
            <h3>Special Attention For Every Child</h3>
          </div>
          <p>
            Our mission is to inspire young minds and foster their growth
            through play. We understand the importance of early childhood
            development and the role that toys play in shaping a child's
            learning journey. That's why we handpick each toy in our collection
            to ensure it not only entertains but also stimulates cognitive,
            motor, and social skills.
          </p>
          <ul className="about-list">
            <li>
              <FaAward></FaAward> <span>Age-Appropriate</span> Learning
            </li>
            <li>
              <FaAward></FaAward> <span>STEM</span> Learning Tools
            </li>
            <li>
              <FaAward></FaAward> <span>Imaginative</span> Playsets
            </li>
            <li>
              <FaAward></FaAward> <span>Safe and Durable</span> Materials
            </li>
          </ul>
          <blockquote class="about-quote">
            <div class="thumb">
              <img src={quote} alt="" srcset="" />
            </div>
            <div class="content">
              <span class="quote">
                “A Child Can Ask Questions That A Wise Man Cannot Answer.”
              </span>
              <span class="name"> (Erma Bombeck)</span>
            </div>
          </blockquote>
        </div>
      </Container>
    </div>
  );
};

export default About;
