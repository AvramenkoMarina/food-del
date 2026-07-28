import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          Food delivery is a convenient service that allows people to order
          meals from restaurants and have them delivered directly to their
          homes, offices, or other locations.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
