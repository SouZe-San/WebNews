import { useState } from "react";
import "./logStyle.scss";

import { useSelector, useDispatch } from "react-redux";
import { setUser, setClicked } from "../../redux/features/authenticationSlice";

const LogIn = () => {
  const { isClicked } = useSelector((state) => state.authentication);
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();

  const handelSubmit = (e) => {
    e.preventDefault();
    if (email === "") return;
    dispatch(setUser(email));
    dispatch(setClicked());
    setEmail("");
  };

  return (
    <div className={`w-full max-w-xs mainForm ${isClicked ? "down" : "up"}`}>
      <form className=" shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="email"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <input
            className="shadow appearance-none border-none rounded w-full py-2 px-3  mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            name="password"
            placeholder="Password..."
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="submit_btn text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            onClick={handelSubmit}
          >
            Done
          </button>
        </div>
      </form>
    </div>
  );
};

export default LogIn;
