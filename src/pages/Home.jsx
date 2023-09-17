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
      <section className="Navigation_section py-6">
        <Navbar />
      </section>
      {/* News Section */}
      <section className="NewsSection">
        <h1 className="w-full text-center newsHead">TechNology</h1>
        <NewsBlock />
      </section>
    </div>
  );
};

export default Home;
