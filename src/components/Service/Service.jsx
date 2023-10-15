import React, { useEffect, useState } from "react";
import "./Service.css";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Container } from "react-bootstrap";
import serviceImg1 from "../../assets/service/serviceimg-1.png";
import serviceImg2 from "../../assets/service/serviceimg-2.png";
import serviceImg3 from "../../assets/service/serviceimg-3.png";
import serviceImg4 from "../../assets/service/serviceimg-4.png";
import serviceImg5 from "../../assets/service/serviceimg-5.png";
const Service = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("service.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div className="service-area">
      <SectionTitle
        title="What we provide"
        subtitle="Our Services"
      ></SectionTitle>
      <Container>
        {services.map((service) => (
          <div class="services-part">
            <div class="service-img">
              <img src={service.image} alt="" srcset="" />
            </div>
            <div class="service-block">
              <div class="service-title">{service.title}</div>
              <div class="service-desc">{service.desc}</div>
            </div>
          </div>
        ))}

        {/* <div class="services-part">
            <div class="service-img">
              <img src={serviceImg1} alt="" srcset="" />
            </div>
            <div class="service-block">
              <div class="service-title">Worldwide Delivery</div>
              <div class="service-desc">On order over $150-7 days</div>
            </div>
          </div> */}
      </Container>
    </div>
  );
};

export default Service;
