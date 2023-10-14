// import React from "react";
// import "./Gallery.css";

// const Gallery = () => {
//   return (
//     <div className="gallery-area">
//       <div className="container">
//         <div className="section-title">
//           <p>Have A Look</p>
//           <h3>Our Photo Gallery</h3>
//         </div>
//         <div class="row">
//           <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
//             <img
//               src="https://images.pexels.com/photos/6623832/pexels-photo-6623832.jpeg?auto=compress&cs=tinysrgb&w=600"
//               class="w-100 shadow-1-strong rounded mb-4"
//             />

//             <img
//               src="https://images.pexels.com/photos/8612926/pexels-photo-8612926.jpeg?auto=compress&cs=tinysrgb&w=600"
//               class="w-100 shadow-1-strong rounded mb-4"
//             />
//           </div>

//           <div class="col-lg-4 mb-4 mb-lg-0">
//             <img
//               src="https://images.pexels.com/photos/8612968/pexels-photo-8612968.jpeg?auto=compress&cs=tinysrgb&w=600"
//               class="w-100 shadow-1-strong rounded mb-4"
//             />

//             <img
//               src="https://images.pexels.com/photos/14249703/pexels-photo-14249703.jpeg?auto=compress&cs=tinysrgb&w=600"
//               class="w-100 shadow-1-strong rounded mb-4"
//             />
//           </div>

//           <div class="col-lg-4 mb-4 mb-lg-0">
//             <img
//               src="https://plus.unsplash.com/premium_photo-1663091651850-bd044f089c31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWR1Y2F0aW9uYWwlMjB0b3klMjBpbWFnZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
//               class="w-100 shadow-1-strong rounded mb-4"
//             />

//             <img
//               src="https://images.pexels.com/photos/7334320/pexels-photo-7334320.jpeg?auto=compress&cs=tinysrgb&w=600"
//               class="w-100 shadow-1-strong rounded mb-4"
//             />
//             <img
//               src="https://images.pexels.com/photos/6210331/pexels-photo-6210331.jpeg?auto=compress&cs=tinysrgb&w=600"
//               class="w-100 shadow-1-strong rounded mb-4 last"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Gallery;

import React from "react";
import "./Gallery.css";
import { Container } from "react-bootstrap";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import img1 from "../../assets/gallery/1.png";
import img2 from "../../assets/gallery/2.png";
import img3 from "../../assets/gallery/3.png";
import img4 from "../../assets/gallery/4.png";
import img5 from "../../assets/gallery/5.png";
import img6 from "../../assets/gallery/6.png";
import img7 from "../../assets/gallery/7.png";
import img8 from "../../assets/gallery/8.png";
import img9 from "../../assets/gallery/9.png";
import img10 from "../../assets/gallery/10.png";
import img11 from "../../assets/gallery/11.png";
import img12 from "../../assets/gallery/12.png";
import img13 from "../../assets/gallery/13.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";

const Gallery = () => {
  return (
    <div className="gallery-area">
      {/* <Container> */}
      <SectionTitle
        subtitle="Have a look"
        title="Our Photo Gallery"
        text="In our gallery, you'll find an array of toys that inspire adventure, foster curiosity, and encourage meaningful play."
      ></SectionTitle>
      <div className="gallery-content">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          // autoplay={{
          //   delay: 2500,
          //   disableOnInteraction: false,
          // }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={img8} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img9} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img12} alt="" srcset="" />
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
            <img src={img1} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img2} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img1} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img11} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img12} alt="" srcset="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={img13} alt="" srcset="" />
          </SwiperSlide>
        </Swiper>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default Gallery;
