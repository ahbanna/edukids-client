import React, { useState } from "react";
import "./Video.css";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Modal, Button } from "react-bootstrap";
import videoImg from "../../assets/video/video-img.jpg";
import playIcon from "../../assets/paly-btn.json";
import Lottie from "lottie-react";

const Video = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="video-area">
      <Container>
        <div className="video-content">
          <SectionTitle
            title="Edu Kids: Where Imagination Comes to Life!"
            subtitle="Visual Representation"
            text=" Explore, Learn, Play: Your Ultimate Destination for Toy Maintenance, Community Fun, Behind-the-Scenes Manufacturing, Happy Customers, Reviews, Unboxing Thrills, and Exciting Toy Comparisons!"
          ></SectionTitle>
          <button>
            <Link to="https://www.youtube.com/" target="_blank">
              View More
            </Link>
          </button>
        </div>
        <div className="video">
          <img
            src={videoImg}
            alt="Video Thumbnail"
            // style={{ cursor: "pointer" }}
          />
          <div className="play-btn">
            <Lottie animationData={playIcon} loop={true} onClick={handleShow} />
          </div>
          <Modal
            show={show}
            onHide={handleClose}
            className="d-flex justify-content-center align-items-center"
          >
            <Modal.Body>
              <div className="embed-responsive embed-responsive-16by9 d-flex justify-content-center align-items-center">
                <iframe
                  width="860"
                  height="515"
                  src="https://www.youtube.com/embed/FpFJv3LeXTs?si=Qsh88l591-5t-FBq"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </Modal.Body>
          </Modal>
        </div>
      </Container>
    </div>
  );
};

export default Video;
