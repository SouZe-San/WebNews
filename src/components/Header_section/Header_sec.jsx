// import React from 'react'
import LogIn from "../login/LogIn";
import "./header_style.scss";
import { setClicked } from "../../redux/features/authenticationSlice";
import { useDispatch, useSelector } from "react-redux";
const Header_sec = () => {
  const { user } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();
  return (
    <div className="headerSec w-full h-[70px] flex py-4 px-8 justify-between items-center">
      <h1 className="center_LOGO grow sm:text-center sm:translate-x-12 text-left ">WebNews</h1>

      <div className="sideOptions">
        <button
          className="login_btn btn"
          onClick={() => {
            console.log("clicked");
            dispatch(setClicked());
          }}
        >
          {user ? user.charAt(0).toUpperCase() : "Log In"}
        </button>
        <LogIn />
      </div>
    </div>
  );
};

export default Header_sec;
