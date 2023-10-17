// import React, { useContext, useEffect, useState } from "react";
// import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
// import "./Category.css";
// import { Link } from "react-router-dom";
// import { AuthContext } from "../../providers/AuthProvider";

// const Category = () => {
//   const [cats, setCats] = useState([]);
//   useEffect(() => {
//     fetch("https://eudkids-server.vercel.app/alltoys")
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result);
//         setCats(result);
//       });
//   }, []);

//   const [activeTab, setActiveTab] = useState("Math Toys");

//   return (
//     <div className="category-area container">
//       <div className="section-title">
//         <p>Browse our wide selection</p>
//         <h3>Shop by category</h3>
//       </div>
//       <Tabs defaultActiveTab={activeTab} onSelect={(tab) => setActiveTab(tab)}>
//         <TabList>
//           <Tab>Math Toys</Tab>
//           <Tab>Language Toys</Tab>
//           <Tab>Science Toys</Tab>
//         </TabList>
//         <div className="container">
//           <div className="grid-container">
//             <TabPanel value="Math Toys">
//               {cats
//                 .filter((cat) => cat.subCategory === "Math Toys")
//                 .map((cat) => (
//                   <div key={cat.id} className="grid-item">
//                     <img src={cat.toyPic} alt="" />
//                     <p>
//                       <span>Toy Name: </span>
//                       {cat.toyName}
//                     </p>
//                     <p>
//                       <span>Price: $</span>
//                       {cat.price}
//                     </p>
//                     <p>
//                       <span>Rating: </span>
//                       {cat.rating}
//                     </p>
//                     <Link
//                       to={`https://edu-kids-e7e02.web.app/alltoys/${cat.id}`}
//                     >
//                       <button className="view-details">View Details</button>
//                     </Link>
//                   </div>
//                 ))}
//             </TabPanel>
//             <TabPanel value="Language Toys">
//               {cats
//                 .filter((cat) => cat.subCategory === "Language Toys")
//                 .map((cat) => (
//                   <div key={cat.id} className="grid-item">
//                     <img src={cat.toyPic} alt="" />
//                     <p>
//                       <span>Toy Name: </span>
//                       {cat.toyName}
//                     </p>
//                     <p>
//                       <span>Price: $</span>
//                       {cat.price}
//                     </p>
//                     <p>
//                       <span>Rating: </span>
//                       {cat.rating}
//                     </p>
//                     <button className="view-details">View Details</button>
//                   </div>
//                 ))}
//             </TabPanel>
//             <TabPanel value="Science Toys">
//               {cats
//                 .filter((cat) => cat.subCategory === "Science Toys")
//                 .map((cat) => (
//                   <div key={cat.id} className="grid-item">
//                     <img src={cat.toyPic} alt="" />
//                     <p>
//                       <span>Toy Name: </span>
//                       {cat.toyName}
//                     </p>
//                     <p>
//                       <span>Price: $</span>
//                       {cat.price}
//                     </p>

//                     <p>
//                       <span>Rating: </span>
//                       {cat.rating}
//                     </p>
//                     <button className="view-details">View Details</button>
//                   </div>
//                 ))}
//             </TabPanel>
//           </div>
//         </div>
//       </Tabs>
//     </div>
//   );
// };

// export default Category;

import React, { useContext, useEffect, useState } from "react";
import { Tabs, TabList, TabPanel, Tab } from "react-tabs";
import "./Category.css";
import { Link } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import CustomButton from "../Shared/CustomButton/CustomButton";

const Category = () => {
  // toast
  const notify = () => toast("You have to log in first to view details!");
  const [cats, setCats] = useState([]);
  useEffect(() => {
    fetch("https://eudkids-server.vercel.app/alltoys")
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setCats(result);
      });
  }, []);

  const [activeTab, setActiveTab] = useState("Math Toys");

  return (
    <div className="category-area container">
      <SectionTitle
        subtitle="Product Category"
        title="Shop By Category"
        text="We curate an extensive collection of toys that cater to every child's imagination and delight."
      ></SectionTitle>
      <Tabs defaultActiveTab={activeTab} onSelect={(tab) => setActiveTab(tab)}>
        <TabList>
          <Tab>Math Toys</Tab>
          <Tab>Language Toys</Tab>
          <Tab>Science Toys</Tab>
        </TabList>
        <div className="container">
          <div className="grid-container">
            <TabPanel value="Math Toys">
              {cats
                .filter((cat) => cat.subCategory === "Math Toys")
                .map((cat) => (
                  <div key={cat._id} className="grid-item">
                    <img src={cat.toyPic} alt="" />
                    <p>
                      <span>Toy Name: </span>
                      {cat.toyName}
                    </p>
                    <p>
                      <span>Price: $</span>
                      {cat.price}
                    </p>
                    <p>
                      <span>Rating: </span>
                      {cat.rating}
                    </p>
                    <Link
                      to={`https://edu-kids-e7e02.web.app/alltoys/${cat._id}`}
                    >
                      <button onClick={notify} className="view-details">
                        View Details
                      </button>
                      <ToastContainer autoClose={7000} />
                    </Link>
                  </div>
                ))}
            </TabPanel>
            <TabPanel value="Language Toys">
              {cats
                .filter((cat) => cat.subCategory === "Language Toys")
                .map((cat) => (
                  <div key={cat.id} className="grid-item">
                    <img src={cat.toyPic} alt="" />
                    <p>
                      <span>Toy Name: </span>
                      {cat.toyName}
                    </p>
                    <p>
                      <span>Price: $</span>
                      {cat.price}
                    </p>
                    <p>
                      <span>Rating: </span>
                      {cat.rating}
                    </p>
                    <Link
                      to={`https://edu-kids-e7e02.web.app/alltoys/${cat._id}`}
                    >
                      <button onClick={notify} className="view-details">
                        View Details
                      </button>
                      <ToastContainer autoClose={7000} />
                    </Link>
                  </div>
                ))}
            </TabPanel>
            <TabPanel value="Science Toys">
              {cats
                .filter((cat) => cat.subCategory === "Science Toys")
                .map((cat) => (
                  <div key={cat.id} className="grid-item">
                    <img src={cat.toyPic} alt="" />
                    <p>
                      <span>Toy Name: </span>
                      {cat.toyName}
                    </p>
                    <p>
                      <span>Price: $</span>
                      {cat.price}
                    </p>

                    <p>
                      <span>Rating: </span>
                      {cat.rating}
                    </p>
                    <Link
                      to={`https://edu-kids-e7e02.web.app/alltoys/${cat._id}`}
                    >
                      <button onClick={notify} className="view-details">
                        View Details
                      </button>
                      <ToastContainer autoClose={7000} />
                    </Link>
                  </div>
                ))}
            </TabPanel>
          </div>
        </div>
      </Tabs>
      <CustomButton
        buttonText="View More"
        to="/alltoys"
        target="_blank"
      ></CustomButton>
    </div>
  );
};

export default Category;
