import Hero_part from "../components/HeroSection/Hero_part";
import Navbar from "../components/Navbar/Navbar";
import NewsBlock from "../components/NewBlock/NewsBlock";

const Home = () => {
  return (
    <div>
      {/* Hero Section  */}
      <Hero_part />
      {/* NAvABar */}
      <div className=" bg-slate-600 py-4">
        <Navbar />
      </div>
      {/* News Section */}
      <NewsBlock />
    </div>
  );
};

export default Home;
