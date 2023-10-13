import React from "react";
import "./Creative.css";
import { Container } from "react-bootstrap";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import creativeImg1 from "../../assets/creative/creative-img1.jpg";
import creativeImg2 from "../../assets/creative/creative-img2.jpg";
import handShake from "../../assets/creative/hand-shake.png";
const Creative = () => {
  return (
    <div className="creative-area">
      <Container>
        <div className="creative-content">
          <SectionTitle
            subtitle="Compatible"
            title="The Perfect Place For Your Kids To Open Their Creative Wings"
            text="we believe in nurturing young minds through play. Our curated collection of educational toys is designed to be more than just playthings; they are tools that inspire creativity, innovation, and endless imagination. Our toys not only entertain but also educate, encouraging children to think critically, solve problems, and express themselves freely."
          ></SectionTitle>
          <button>See Collection</button>
        </div>
        <div className="creative-img">
          <img src={creativeImg1} alt="" srcset="" />
          <img src={creativeImg2} alt="" srcset="" />
        </div>
      </Container>
      <div className="handshake-img">
        <img src={handShake} alt="" srcset="" />
      </div>
    </div>
  );
};

export default Creative;
