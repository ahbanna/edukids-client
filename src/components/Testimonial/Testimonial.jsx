import React, { useEffect, useState } from "react";
import "./Testimonial.css";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Container } from "react-bootstrap";
import { FaQuoteLeft } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import { Grid, Autoplay, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [testimonials, setTestimonials] = useState([]);
  useEffect(() => {
    fetch("testimonials.json")
      .then((res) => res.json())
      .then((data) => setTestimonials(data));
  }, []);

  return (
    <div className="testimonial-area">
      <SectionTitle
        title="Customer's Feedback"
        subtitle="Testimonial"
        text=""
      ></SectionTitle>
      <Container className="all-testimonials">
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 1,
          }}
          spaceBetween={30}
          // autoplay={{
          //   delay: 2000,
          //   disableOnInteraction: false,
          // }}
          navigation={true}
          modules={[Grid, Autoplay, Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="mySwiper"
        >
          {/* <SwiperSlide> */}
          {testimonials.map((testimonial) => (
            // <div className="single-testimonial">
            <SwiperSlide>
              <div className="single-testimonial">
                <div className="rating-quote">
                  <div className="rating-star">
                    <Rating
                      style={{ maxWidth: 80 }}
                      value={testimonial.rating}
                      readOnly
                    />
                  </div>
                  <div className="quote-icon">
                    <FaQuoteLeft></FaQuoteLeft>
                  </div>
                </div>
                <p>{testimonial.feedback}</p>
                <div className="customer-info">
                  <img src={testimonial.image} alt="" srcset="" />
                  <p className="customer-name">{testimonial.name}</p>
                </div>
              </div>
            </SwiperSlide>
            // </div>
          ))}
          {/* </SwiperSlide> */}
        </Swiper>
      </Container>
    </div>
  );
};

export default Testimonial;
