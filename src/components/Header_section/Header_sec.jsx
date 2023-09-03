// import React from 'react'
import "./header_style.scss";
const Header_sec = () => {
  return (
    <div className="headerSec w-full h-[70px] flex py-4 px-8 justify-between items-center">
      <h1 className="center_LOGO grow sm:text-center sm:translate-x-12 text-left ">WebNews</h1>

      <div className="sideOptions ">
        <button className="login_btn btn">logIn</button>
      </div>
    </div>
  );
};

export default Header_sec;
