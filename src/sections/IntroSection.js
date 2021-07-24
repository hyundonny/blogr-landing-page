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
    <section className="hero">
      <Header
        showHamburger={showHamburger}
        mobileMenuOpen={mobileMenuOpen}
        toggleMobileMenu={toggleMobileMenu}
      />
      <MobileMenu mobileMenuOpen={mobileMenuOpen} />
    </section>
  );
};

export default Intro;
