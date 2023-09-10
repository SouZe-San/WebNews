import "./style.scss";
import { useRef } from "react";
// import arrow from "../../assets/navAssets/arrow01.png";
import arrow from "../../assets/navAssets/arrow02.png";
import MotionAnimation from "../motion/MotionAnimation";

// Image Import
import img1 from "../../assets/navAssets/home/Fashion.webp";
import img2 from "../../assets/navAssets/sport/blue-football.webp";
import img3 from "../../assets/navAssets/science/COM.webp";
import img4 from "../../assets/navAssets/business/poster.webp";
import img5 from "../../assets/navAssets/tech/camera.webp";
import img6 from "../../assets/navAssets/entertainment/colorFest.webp";
import { Link } from "react-router-dom";

const Navbar = () => {
  const nav_items = ["Home", "Sport", "Science", "Business", "Technology", "Entertainment"];
  const nav_assets = [img1, img2, img3, img4, img5, img6];

  const navigationBox = useRef(null);
  const imgRef = useRef(null);

  return (
    <div className="flex justify-between items-center px-8 my-4 w-full">
      <nav className="grid grid-row-6 w-full" ref={navigationBox}>
        {nav_items.map((item, index) => {
          return (
            <div className="nav_item flex text-[3rem] items-center justify-between" key={index}>
              <Link to={`/${item}`} className="nav_title flex items-center">
                <span className="navNo">(00{index + 1})</span>
                <div className="text-black nav_name font-semibold " data-text={item}>
                  {item}
                </div>
              </Link>
              <MotionAnimation index={index} navigationBox={navigationBox}>
                <div className="img_container absolute">
                  <img src={nav_assets[index]} alt="" ref={imgRef} loading="lazy" />
                </div>
              </MotionAnimation>
              <div className="arrow  sm:block hidden">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Navbar;
