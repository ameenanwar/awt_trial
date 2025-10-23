import React from "react";
import { Link } from "react-router-dom"; // ✅ Needed for <Link>

const Side_bar = ({ closeSidebar }) => { // ✅ receive function from parent
  const main = {
    backgroundColor: "#26667F",
    width: "200px",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: "1rem",
    boxShadow: "2px 0 5px rgba(0,0,0,0.2)",
  };

  const category = {
    color: "white",
    width: "100%",
  };

  const ul = {
    listStyle: "none",
    padding: 0,
    marginTop: "15px",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const link = {
    color: "white",
    textDecoration: "none",
    fontSize: "15px",
    fontFamily: '"Times New Roman", Times, serif',
    transition: "color 0.2s ease",
  };

  const close = {
    top: "auto",
    marginLeft: "130px",
    height: "20px",
    fontSize: "10px",
    cursor: "pointer", // ✅ for pointer on hover
  };

  return (
    <div style={main}>
      <div style={category}>
        <h3 style={{ borderBottom: "1px solid white", paddingBottom: "8px" }}>
          <button style={close} onClick={closeSidebar}> {/* ✅ Close logic */}
            X
          </button>
        </h3>
        <ul style={ul}>
          <li>
            <Link style={link} to="/gadgets">
              Gadgets
            </Link>
          </li>
          <li>
            <Link style={link} to="/groceries">
              Grocery
            </Link>
          </li>
          <li>
            <Link style={link} to="/books">
              Books
            </Link>
          </li>
          <li>
            <Link style={link} to="/mens-fashion">
              Men's Fashion
            </Link>
          </li>
          <li>
            <Link style={link} to="/womens-fashion">
              Women's Fashion
            </Link>
          </li>
          <li>
            <Link style={link} to="/home-kitchen-pets">
              Home, Kitchen, Pets
            </Link>
          </li>
          <li>
            <Link style={link} to="/beauty-health">
              Beauty, Health, Grocery
            </Link>
          </li>
          <li>
            <Link style={link} to="/toys-baby">
              Toys, Baby Products, Kids' Fashion
            </Link>
          </li>
          <li>
            <Link style={link} to="/music-games">
              Music & Video Games
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Side_bar;
