// import React from 'react'
import UserIcon from "../usericon/UserIcon";
import "./style.scss";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 my-4 w-full">
      <div className="nav_section flex grow">
        <div className="logo_section">WebNews</div>
        <nav className="grid grid-cols-6">
          <div className="nav_items">Home</div>
          <div className="nav_items">Sport</div>
          <div className="nav_items">Science</div>
          <div className="nav_items">Business</div>
          <div className="nav_items">Technology</div>
          <div className="nav_items">Entertainment</div>
        </nav>
      </div>
      <div className="icon_section flex justify-between w-[100px] ml-4">
        <div className="menu_icon">icon</div>
        <div className="user_icon">
          <UserIcon latter="S" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
