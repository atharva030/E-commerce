import React, { useState } from "react";
import "../Styles/login.css";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Signup = () => {
  return (
    <>
      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className="signup-form">
        <h3>Create Your Account</h3>

        <Carousel>
          <div className="sign-container">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              placeholder="Enter your name "
              name="name"
              required
            />

            <label htmlFor="email">Email address</label>
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="sign-container">
            <label htmlFor="name">Age</label>
            <input
              type="number"
              placeholder="Enter your Age "
              name="name"
              required
            />

            <label htmlFor="email">Current Address</label>
            <input
              type="text"
              placeholder="Enter your Address"
              id="email"
              name="email"
              required
            />
          </div>

          <div className="sign-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Enter your Password"
              minLength={5}
              id="password"
              name="password"
              required
            />
            <label htmlFor="password">Confirm Password</label>
            <input
              type="password"
              name="cpassword"
              minLength={5}
              placeholder="Confirm your Password"
              id="cpassword"
              required
            />
          </div>
        </Carousel>
        <div style={{ margin: "18px 0 7px 66px" }}>
          Already have an Account? <Link to="/login">Login</Link>{" "}
        </div>
        <button className="login-button">Next</button>
      </form>
    </>
  );
};

export default Signup;
