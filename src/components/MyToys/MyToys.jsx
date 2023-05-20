import React, { useContext, useEffect, useState } from "react";
import "./MyToys.css";
import { AuthContext } from "../../providers/AuthProvider";
const MyToys = () => {
  const { user } = useContext(AuthContext);
  const [myToys, setMyToys] = useState([]);
  const url = `http://localhost:5000/alltoys?email=${user?.email}`;
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h2>This is my toys</h2>
    </div>
  );
};

export default MyToys;
