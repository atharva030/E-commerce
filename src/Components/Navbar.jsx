import React from "react";

import { MdFilterList, MdFavorite } from "react-icons/md";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiFillPlayCircle } from "react-icons/ai";
import { FaTshirt } from "react-icons/fa";
import { GiElectric, GiNecklaceDisplay, GiLargeDress } from "react-icons/gi";
import "../Styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  console.log(props.isActive);
  return (
    <>
      <header className="header" style={{display:`${props.isActive?"block":""}`}}>
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/">
                <div className="flex">
                  
                  <div style={{ marginRight: "8px" }}>
                    <MdFilterList />
                  </div>
                  All Products
                </div>
              </Link>
            </li>
            <li>
              <Link to="/electronics">
                
                <div className="flex">
                  <div style={{ marginRight: "8px" }}>
                    <GiElectric />
                  </div>
                  Electronics
                </div>
              </Link>
            </li>
            <li>
              <Link to="/jewelery">
                <div className="flex">
                  <div style={{ marginRight: "8px" }}>
                    <GiNecklaceDisplay />
                  </div>
                  Jewelery
                </div>
              </Link>
            </li>
            <li>
              <Link to="/mencloth">
                <div className="flex">
                  <div style={{ marginRight: "8px" }}>
                    <FaTshirt />
                  </div>
                  Men Collection
                </div>
              </Link>
            </li>
            <li>
              <Link to="/womencloth">
                <div className="flex">
                  
                  <div style={{ marginRight: "8px" }}>
                    
                    <GiLargeDress />
                  </div>
                  Women Collection
                </div>
              </Link>
            </li>
          </ul>

          <Link to="/login">
            <button className="btn">Login</button>
          </Link>
          <Link to="/signup">
            <button className="btn">Sign Up</button>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
