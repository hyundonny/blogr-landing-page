import { useState, useEffect, useCallback } from "react";

import Header from "./header";
import MobileMenu from "./mobileMenu";

const Intro = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleResize = () => {
    if (window.innerWidth > 769) {
      setShowHamburger(false);
      setMobileMenuOpen(false);
    } else if (window.innerWidth <= 769) {
      setShowHamburger(true);
    }
  };

  useEffect(() => {
    window.innerWidth <= 769 ? setShowHamburger(true) : setShowHamburger(false);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <section className="intro">
      <div className="container">
        <Header
          showHamburger={showHamburger}
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
        <MobileMenu mobileMenuOpen={mobileMenuOpen} />
        <div className="intro__body">
          <h1 className="intro__body-title">A modern publishing platform</h1>
          <p className="intro__body-text">
            Grow your audience and build your online brand
          </p>
        </div>
      </div>
      <div className="intro__buttons">
        <button className="button bg-white">Start for free</button>
        <button className="button border">Learn more</button>
      </div>
    </section>
  );
};

export default Intro;
