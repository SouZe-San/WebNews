import Hero_part from "../components/HeroSection/Hero_part";
import Navbar from "../components/Navbar/Navbar";
import NewsBlock from "../components/NewBlock/NewsBlock";
import "./homeStyle.scss";
const Home = () => {
  return (
    <div>
      {/* Hero Section  */}
      <Hero_part />
      {/* NAvABar */}
      <div className="Navigation_section py-6">
        <Navbar />
      </div>
      {/* News Section */}
      <NewsBlock />
    </div>
  );
};

export default Home;
