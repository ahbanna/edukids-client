// import React from "react";
// import bannerImg from "../../assets/banner.jpg";
// import "./Banner.css";

// const Banner = () => {
//   return (
//     <div className="banner-section">
//       <div
//         className="banner-img"
//         style={{ backgroundImage: `url(${bannerImg})` }}
//       >
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6">
//               <div className="banner-content">
//                 <h2>Extraordinary Learning Toys</h2>
//                 <p>
//                   Together We’ll Explore New Things. The best place to your buy
//                   dream toys. We provide toys for all age kids.
//                 </p>
//                 <div className="learn-more-btn">
//                   <button>Learn More</button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Banner;

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination } from "swiper/modules";

import banner1 from "../../assets/banner/banner1.png";
import banner2 from "../../assets/banner/banner2.png";
import banner3 from "../../assets/banner/banner3.png";
import banner4 from "../../assets/banner/banner4.png";
import banner5 from "../../assets/banner/banner5.png";
import "./Banner.css";
import BannerTitle from "../Shared/BannerTitle/BannerTitle";
import { Container } from "react-bootstrap";

const Banner = () => {
  return (
    <div className="banner-area">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        // spaceBetween={30}
        mousewheel={true}
        pagination={{
          clickable: true,
        }}
        modules={[Mousewheel, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="single-slide">
          <img src={banner5} alt="" srcset="" />
          <Container>
            <div className="banner-content">
              <BannerTitle
                title="Empowering Kids from Small Age Towards Vision"
                text=" Each toy on our shelves is a gateway to exploration, encouraging children to delve into the wonders of science, mathematics, creativity, and more."
                buttonText="Shop Now"
                buttonLink="/alltoys"
              ></BannerTitle>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide className="single-slide banner-4">
          <img src={banner4} alt="" srcset="" />
          <Container>
            <div className="banner-content">
              <BannerTitle
                title="Play & Learn How to Create New Things"
                text=" Each toy on our shelves is a gateway to exploration, encouraging children to delve into the wonders of science, mathematics, creativity, and more."
                buttonText="Shop Now"
                buttonLink="/alltoys"
              ></BannerTitle>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide className="single-slide">
          <img src={banner1} alt="" srcset="" />
          <Container>
            <div className="banner-content">
              <BannerTitle
                title="Where Learning Meets Fun and Innovation"
                text="At our store, we believe in the power of education to shape a better tomorrow. Our educational toys are carefully selected to stimulate curiosity."
                buttonText="Shop Now"
                buttonLink="/alltoys"
              ></BannerTitle>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide className="single-slide banner-2">
          <img src={banner2} alt="" srcset="" />
          <Container>
            <div className="banner-content">
              <BannerTitle
                title="Inspiring Curious Minds, One Toy at a Time"
                text="Through interactive and educational play, we aim to spark a lifelong love for learning. Explore our store and embark on a journey."
                buttonText="Shop Now"
                buttonLink="/alltoys"
              ></BannerTitle>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide
          className="single-slide banner-3"
          // style={{ backgroundColor: "#3498db" }}
        >
          <img src={banner3} alt="" srcset="" />
          <Container>
            <div className="banner-content">
              <BannerTitle
                title="Give Your Kids the Best Possible Start"
                text="Every toy is thoughtfully selected to encourage cognitive, emotional, and social development in children. We are committed to providing families with high-quality, engaging toys. "
                buttonText="Shop Now"
                buttonLink="/alltoys"
              ></BannerTitle>
            </div>
          </Container>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
