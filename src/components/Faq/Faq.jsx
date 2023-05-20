import React, { useEffect } from "react";
import "./Faq.css";
import { Accordion } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";

const Faq = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="faq-area">
      <div className="container">
        <div className="section-title">
          <p>Find Your Answer From Here</p>
          <h3>Frequently Asked Questions</h3>
        </div>
        <div className="row">
          <div className="col-lg-3" data-aos="zoom-in-up">
            <img
              src="https://images.pexels.com/photos/8923952/pexels-photo-8923952.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="col-lg-3" data-aos="zoom-in-down">
            <img
              src="https://images.pexels.com/photos/5426391/pexels-photo-5426391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </div>
          <div className="col-lg-6 faq-item">
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="0">
                <Accordion.Header>
                  What is the age range of toys available in the store?{" "}
                </Accordion.Header>
                <Accordion.Body>
                  The age range of toys available in the educational toy selling
                  website is from birth to 12 years old. There are toys for all
                  ages, from infants to toddlers to preschoolers to school-aged
                  children. The toys are designed to help children learn and
                  grow in a variety of ways, including cognitive, physical,
                  social, and emotional development.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>
                  Do you offer a warranty or return policy for your products?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, we offer a warranty and return policy for our products.
                  Our warranty covers defects in materials and workmanship for a
                  period of one year from the date of purchase. If you find a
                  defect in your product, please contact us and we will be happy
                  to replace it for you.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2">
                <Accordion.Header>
                  Are your toys environmentally friendly and sustainable?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, we are committed to providing environmentally friendly
                  and sustainable toys. We use a variety of materials in our
                  toys, including wood, recycled plastic, and organic cotton. We
                  also use non-toxic paints and finishes.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3">
                <Accordion.Header>
                  Can I order toys online or do I need to visit the store?
                </Accordion.Header>
                <Accordion.Body>
                  Yes, you can order toys online from our educational toy
                  selling website. We offer a convenient and easy way to shop
                  for toys from the comfort of your own home. You can browse our
                  selection of toys by age, category, or brand. You can also
                  read reviews from other customers to help you make the best
                  decision for your child.
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="4">
                <Accordion.Header>
                  Do I need to pick them up in-store or delivered at home?
                </Accordion.Header>
                <Accordion.Body>
                  You can choose to pick up your toys in-store or have them
                  delivered to your home. If you choose to pick up your toys
                  in-store, you can do so at any of our convenient locations. We
                  offer free shipping on orders over $50, so if you choose to
                  have your toys delivered to your home, you will not have to
                  pay any shipping fees.
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
