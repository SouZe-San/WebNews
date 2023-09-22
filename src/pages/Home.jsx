import { useSelector } from "react-redux";
import { useRef } from "react";

import Hero_part from "../components/HeroSection/Hero_part";
import Navbar from "../components/Navbar/Navbar";
import NavRoutes from "../components/NewBlock/NavRoutes";

import "./homeStyle.scss";
const Home = () => {
  const { newsTitle } = useSelector((state) => state.newsChanger);
  const newsSection = useRef(null);

  return (
    <div>
      {/* Hero Section  */}
      <Hero_part />
      {/* NAvABar */}
      <section className="Navigation_section py-6">
        <Navbar newsRef={newsSection} />
      </section>
      {/* News Section */}
      <section className="NewsSection" ref={newsSection}>
        <h1 className="w-full text-center newsHead">{newsTitle}</h1>
        <NavRoutes />
      </section>
    </div>
  );
};

export default Home;
