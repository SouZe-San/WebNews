import Header_sec from "../Header_section/Header_sec";
import TopNews from "../TopNews/TopNews";

import "./Hero_part_style.scss";

const Hero_part = () => {
  return (
    <section className="hero_section">
      {/* Logo Section  */}
      <Header_sec />
      {/* Headline */}
      <h1 className="headLine text-center h-[50px]">Todays T0p</h1>
      {/* TOp 3 news */}
      <TopNews />
    </section>
  );
};

export default Hero_part;
