import "./style.scss";
import arrow from "../../assets/navAssets/arrow01.png";

const Navbar = () => {
  const nav_items = ["Home", "Sport", "Science", "Business", "Technology", "Entertainment"];

  // const nav_assets = []

  return (
    <div className="flex justify-between items-center px-8 my-4 w-full">
      <nav className="grid grid-row-6 w-full">
        {nav_items.map((item, index) => {
          return (
            <div className="nav_item flex text-[3rem] items-center" key={index}>
              <div className="nav_title flex">
                <span className="navNo">00{index + 1}</span>
                <div className="text-white text-[3.4rem] nav_name font-semibold ">{item}</div>
              </div>
              <div className="arrow">
                <img src={arrow} alt="arrow" />
              </div>
            </div>
          );
        })}
      </nav>
      <div className="img_container"></div>
    </div>
  );
};

export default Navbar;
