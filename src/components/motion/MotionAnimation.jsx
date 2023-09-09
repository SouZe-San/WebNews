/* eslint-disable no-unused-vars */
import { gsap } from "gsap";
import React, { useRef, useEffect } from "react";

const MotionAnimation = ({ children, index, navigationBox }) => {
  const ref = useRef(null);

  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, "x", { duration: 0.5, ease: "power2" });
    const yTo = gsap.quickTo(ref.current, "y", { duration: 0.5, ease: "power2" });
    const navBox = navigationBox.current;

    const onMouseOver = (e) => {
      const { clientX, clientY } = e;
      const { width, height, left, top } = ref.current.getBoundingClientRect();
      const x = clientX - left - width / 2 + 100;
      const y = clientY - top - height / 2;
      xTo(x);
      yTo(y);
    };

    const onMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    navBox.addEventListener("mousemove", onMouseOver);
    navBox.addEventListener("mouseleave", onMouseLeave);
    return () => {
      navBox.removeEventListener("mousemove", onMouseOver);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      navBox.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [navigationBox]);

  return React.cloneElement(children, { ref });
};

export default MotionAnimation;
