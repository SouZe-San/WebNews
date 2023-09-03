import "./style.scss";
const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-8 my-4 w-full">
      <nav className="grid grid-row-6">
        <div className="nav_items">Home</div>
        <div className="nav_items">Sport</div>
        <div className="nav_items">Science</div>
        <div className="nav_items">Business</div>
        <div className="nav_items">Technology</div>
        <div className="nav_items">Entertainment</div>
      </nav>
    </div>
  );
};

export default Navbar;
