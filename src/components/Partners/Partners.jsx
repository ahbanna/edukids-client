import React from "react";
import "./Partners.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid, Pagination, Autoplay } from "swiper/modules";

import img1 from "../../assets/partners/1.png";
import img2 from "../../assets/partners/2.png";
import img3 from "../../assets/partners/3.png";
import img4 from "../../assets/partners/4.png";
import img5 from "../../assets/partners/5.png";
import img6 from "../../assets/partners/6.png";
import img7 from "../../assets/partners/7.png";
import img8 from "../../assets/partners/8.png";
import { Container } from "react-bootstrap";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Partners = () => {
  return (
    <div className="partners-area">
      <Container>
        <SectionTitle
          subtitle="Brand"
          title="Key Supporters"
          text="More Than Your Average Toy Store"
        ></SectionTitle>
        <Swiper
          slidesPerView={5}
          grid={{
            rows: 1,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Grid, Pagination, Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img1} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img3} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img4} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img5} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img6} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img7} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img8} alt="" srcset="" />
          </SwiperSlide>
        </Swiper>
      </Container>
      <div className="circle-animation"></div>
    </div>
  );
};

export default Partners;
