// import React from "react";
// import { Button, Card } from "react-bootstrap";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

// const Category = () => {
//   return (
//     <div className="category-area">
//       <div className="container">
//         <div className="section-title">
//           <p>Browse our wide selection</p>
//           <h3>Shop by category</h3>
//         </div>
//         <div>
//           <Tabs>
//             <TabList>
//               <Tab>Math Toys</Tab>
//               <Tab>Language Toys</Tab>
//               <Tab>Science Toys</Tab>
//             </TabList>

//             <TabPanel>
//               <Card style={{ width: "18rem" }}>
//                 <Card.Img variant="top" src="holder.js/100px180" />
//                 <Card.Body>
//                   <Card.Title>Card Title</Card.Title>
//                   <Card.Text>
//                     Some quick example text to build on the card title and make
//                     up the bulk of the card's content.
//                   </Card.Text>
//                   <Button variant="primary">Go somewhere</Button>
//                 </Card.Body>
//               </Card>
//             </TabPanel>
//             <TabPanel>
//               <h2>Any content 2</h2>
//             </TabPanel>
//             <TabPanel>
//               <h2>Any content 3</h2>
//             </TabPanel>
//           </Tabs>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Category;

// solve

// import React, { useEffect, useState } from "react";
// import SingleCategory from "../SingleCategory/SingleCategory";
// import { TabList } from "react-tabs";
// import { Tab, Tabs } from "react-bootstrap";

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
//   return (
//     <div>
//       {cats.map((cat) => (
//         <SingleCategory key={cat._id} cat={cat}></SingleCategory>
//       ))}
//     </div>
//   );
// };

// export default Category;

//////////////////////////////
// import React, { useEffect, useState } from "react";
// import { Tabs, TabList, TabPanel, Tab } from "react-tabs";

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
//     <div>
//       <Tabs defaultActiveTab={activeTab} onSelect={(tab) => setActiveTab(tab)}>
//         <TabList>
//           <Tab>Math Toys</Tab>
//           <Tab>Language Toys</Tab>
//           <Tab>Science Toys</Tab>
//         </TabList>
//         <TabPanel value="Math Toys">
//           {cats
//             .filter((cat) => cat.subCategory === "Math Toys")
//             .map((cat) => (
//               <div>
//                 <div className="single-toy">
//                   <p>{cat.price}</p>
//                   <p>{cat.toyName}</p>
//                   <p>{cat.rating}</p>
//                   <p>
//                     <img src={cat.toyPic} alt="" />
//                   </p>
//                   <p>{cat.subCategory}</p>
//                 </div>
//               </div>
//             ))}
//         </TabPanel>
//         <TabPanel value="Language Toys">
//           {cats
//             .filter((cat) => cat.subCategory === "Language Toys")
//             .map((cat) => (
//               <div>
//                 <p>{cat.price}</p>
//                 <p>{cat.toyName}</p>
//                 <p>{cat.rating}</p>
//                 <p>
//                   <img src={cat.toyPic} alt="" />
//                 </p>
//                 <p>{cat.subCategory}</p>
//               </div>
//             ))}
//         </TabPanel>
//         <TabPanel value="Science Toys">
//           {cats
//             .filter((cat) => cat.subCategory === "Science Toys")
//             .map((cat) => (
//               <div>
//                 <p>{cat.price}</p>
//                 <p>{cat.toyName}</p>
//                 <p>{cat.rating}</p>
//                 <p>
//                   <img src={cat.toyPic} alt="" />
//                 </p>
//                 <p>{cat.subCategory}</p>
//               </div>
//             ))}
//         </TabPanel>
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

const Category = () => {
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
      <div className="section-title">
        <p>Browse our wide selection</p>
        <h3>Shop by category</h3>
      </div>
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
                    <button className="view-details">View Details</button>
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
                  </div>
                ))}
            </TabPanel>
          </div>
        </div>
      </Tabs>
    </div>
  );
};

export default Category;
