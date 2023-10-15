// import React, { useState } from "react";
// import "./Newsletter.css";
// import SectionTitle from "../Shared/SectionTitle/SectionTitle";
// import { Container } from "react-bootstrap";
// import Swal from "sweetalert2";
// const Newsletter = () => {
//   const [email, setEmail] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle form submission here (e.g., send data to a server)
//     console.log("Email submitted:", email);
//     // Clear the input field after submission
//     setEmail("");
//   };
//   return (
//     <div className="newsletter-area">
//       <SectionTitle
//         title="Subscribe to Our Newsletter"
//         subtitle="Newsletter"
//         text="Get updates about our latest products and offers"
//       ></SectionTitle>
//       <Container>
//         <div className="newsletter-form">
//           <form onSubmit={handleSubmit}>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <button type="submit">Subscribe</button>
//           </form>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Newsletter;

import React, { useState } from "react";
import "./Newsletter.css";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import { Container } from "react-bootstrap";
import Swal from "sweetalert2";
import newsletterImgRight from "../../assets/newsletter/newsletter-right-img.png";
import newsletterImgLeft from "../../assets/newsletter/newsletter-left-img.png";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to a server)
    console.log("Email submitted:", email);

    // Clear the input field after submission
    setEmail("");

    // Show a success message using SweetAlert2
    Swal.fire({
      title: "Subscription Successful!",
      text: "Thank you for subscribing to our newsletter.",
      icon: "success",
      confirmButtonColor: "#007bff",
    });
  };

  return (
    <div className="newsletter-area">
      <SectionTitle
        title="Subscribe to Our Newsletter"
        subtitle="Newsletter"
        text="Get updates about our latest products and offers"
      ></SectionTitle>
      <Container>
        <div className="newsletter-form">
          <form onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </Container>
      <div className="newsletter-img">
        <div className="newslettr-right-img">
          <img src={newsletterImgRight} alt="" srcset="" />
        </div>
        <div className="newslettr-left-img">
          <img src={newsletterImgLeft} alt="" srcset="" />
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
