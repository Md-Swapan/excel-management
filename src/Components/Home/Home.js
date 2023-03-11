import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import logo from "../../assets/image/logo-sm (1).png";

const Home = () => {
  return (
    <div className="home">
      <div className="container">
        <div className="home-section">
          <img src={logo} alt="" />
          <h2>Welcome to excel management</h2>
          <Link to="/dashboard">
            <button type="">Go To Dashboard</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
