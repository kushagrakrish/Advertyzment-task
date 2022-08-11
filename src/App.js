import axios from "axios";
import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";
const App = () => {
  const [users, setUsers] = useState([]);
  const [showData, setShowData] = useState(false);
  const fetchData = async () => {
    try {
      const response = await axios("https://reqres.in/api/users?page=1");
      console.log(response.data.data);
      setUsers(response.data.data);
      setShowData(true);
    } catch (error) {
      console.log(error);
    }
  };
  // fetchData();

  return (
    <div>
      <Navbar />
      {/* <button onClick={fetchData}>Get User</button>
      {showData &&
        users.map((user) => (
          <>
            <li>{user.id}</li>
          </>
        ))} */}
    </div>
  );
};

export default App;
