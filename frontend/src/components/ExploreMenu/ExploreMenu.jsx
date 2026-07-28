import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore our menu</h1>
      <p className="explore-menu-text">
        Food delivery services save time and provide access to a wide variety of
        cuisines without the need to cook or visit a restaurant.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item) => (
          <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className="explore-menu-list-item" key={item.menu_name}>
            <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt={item.menu_name} />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
