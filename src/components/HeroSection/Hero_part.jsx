import Header_sec from "../Header_section/Header_sec";
import TopNews from "../TopNews/TopNews";

import "./Hero_part_style.scss";

const Hero_part = () => {
  return (
    <section className="hero_section md:h-[98vh]">
      {/* Logo Section  */}
      <Header_sec />
      {/* Headline */}
      <div className="headLine text-center h-[50px]">Todays Top</div>
      {/* TOp 3 news */}
      <TopNews />
    </section>
  );
};

export default Hero_part;
