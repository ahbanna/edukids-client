// import React from "react";
// import { Button, Card } from "react-bootstrap";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

// const SingleCategory = ({ cat }) => {
//   const { rating, price, toyPic, toyName, subCategory } = cat;
//   return (
//     <div>
//       <Tabs>
//         <TabList>
//           <Tab>Math Toys</Tab>
//           <Tab>Language Toys</Tab>
//           <Tab>Science Toys</Tab>
//         </TabList>
//         <TabPanel></TabPanel>
//         <TabPanel>
//           <h2>Any content 2</h2>
//         </TabPanel>
//         <TabPanel>
//           <h2>Any content 3</h2>
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// };

// export default SingleCategory;

// solved

// import React from "react";
// import { Button, Card } from "react-bootstrap";
// import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";

// const SingleCategory = ({ cat }) => {
//   const { rating, price, toyPic, toyName, subCategory } = cat;
//   return (
//     <div>
//       <Tabs>
//         <TabList>
//           <Tab>Math Toys</Tab>
//           <Tab>Language Toys</Tab>
//           <Tab>Science Toys</Tab>
//         </TabList>
//         <TabPanel>
//           {subCategory === "Math Toys" && (
//             <div>
//               <h2>{subCategory}</h2>
//               <p>Rating: {rating}</p>
//               <p>Price: {price}</p>
//               <img src={toyPic} alt={toyName} />
//               <p>Toy Name: {toyName}</p>
//             </div>
//           )}
//         </TabPanel>
//         <TabPanel>
//           {subCategory === "Language Toys" && (
//             <div>
//               <h2>{subCategory}</h2>
//               <p>Rating: {rating}</p>
//               <p>Price: {price}</p>
//               <img src={toyPic} alt={toyName} />
//               <p>Toy Name: {toyName}</p>
//             </div>
//           )}
//         </TabPanel>
//         <TabPanel>
//           {subCategory === "Science Toys" && (
//             <div>
//               <h2>{subCategory}</h2>
//               <p>Rating: {rating}</p>
//               <p>Price: {price}</p>
//               <img src={toyPic} alt={toyName} />
//               <p>Toy Name: {toyName}</p>
//             </div>
//           )}
//         </TabPanel>
//       </Tabs>
//     </div>
//   );
// };

// export default SingleCategory;
