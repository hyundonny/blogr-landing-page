import { useState, useEffect, useCallback } from "react";

import Header from "../components/header";
import MobileMenu from "../components/mobileMenu";

const Intro = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback((e) => {
    e.stopPropagation();
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

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
    window.addEventListener("click", closeMobileMenu);
    return () => {
      window.removeEventListener("click", closeMobileMenu);
    };
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
        <div className="intro__body more-padding">
          <h1 className="intro__body-title">A modern publishing platform</h1>
          <p className="intro__body-text">
            Grow your audience and build your online brand
          </p>
        </div>
      </div>
      <div className="intro__buttons more-padding">
        <button className="button bgWhite">Start for free</button>
        <button className="button borderWhite">Learn more</button>
      </div>
    </section>
  );
};

export default Intro;
