/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { gsap } from "gsap";
import NewsItem from "./newsIteam/NewsItem";
import "./style.scss";

const TopNews = ({ isClick, setIsClick, newsData }) => {
  const [height, setHeight] = useState("50%");

  // Change Height values onChange of Width
  useEffect(() => {
    if (window.innerWidth <= 760) {
      setHeight("100%");
    }

    gsap.fromTo(
      ".new_item1",
      {
        scale: 0,
        opacity: 0,
      },
      {
        duration: 0.8,
        scale: 1,
        opacity: 1,
        ease: "power2",
      }
    );
    gsap.fromTo(
      ".new_item2",
      {
        height: 0,
        opacity: 0,
      },
      {
        duration: 1,
        height: height,
        opacity: 1,
        ease: "power2",
        delay: 0.7,
      }
    );
  }, [height]);

  // Animation On Slide changes
  useEffect(() => {
    const tl1 = gsap.timeline({ paused: true });
    // const tl2 = gsap.timeline({ paused: true });
    tl1.to(".new_item1", {
      duration: 0.4,
      x: -500,
      autoAlpha: 0,
      ease: "slow(0.3, 0.4, false)",
    });
    tl1.to(
      ".new_item2",
      {
        duration: 0.4,
        x: 500,
        autoAlpha: 0,
        ease: "slow(0.3, 0.4, false)",
      },
      0
    );
    if (isClick) {
      tl1.play();
      setTimeout(() => {
        tl1.reverse();
      }, 900);
      setIsClick(false);
    }
  }, [isClick, setIsClick]);

  return (
    <div className="w-full py-4 px-16 h-full absolute">
      <div className="CONcontainer flex md:flex-row flex-col">
        <div className="new_item1 item">
          <NewsItem news={newsData[0]} titleFont={"2rem"} />
        </div>
        <div className="second_container flex md:flex-col flex-row md:pr-4">
          <div className="new_item2 item">
            <NewsItem news={newsData[1]} titleFont={"15px"} />
          </div>
          <div className="new_item2 item">
            <NewsItem news={newsData[2]} titleFont={"15px"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNews;
