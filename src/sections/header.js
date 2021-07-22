import { useState, useEffect, useCallback } from "react";

import MobileMenu from "./mobileMenu";

import Hamburger from "../images/icon-hamburger.svg";
import Close from "../images/icon-close.svg";

const Header = () => {
  const [showHamburger, setShowHamburger] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen((prev) => !prev);
  }, []);

  const handleResize = useCallback(() => {
    if (window.innerWidth > 769) {
      setShowHamburger(false);
      setMobileMenuOpen(false);
    } else if (window.innerWidth <= 769) {
      setShowHamburger(true);
    }
  }, []);

  useEffect(() => {
    window.innerWidth <= 769 ? setShowHamburger(true) : setShowHamburger(false);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <header className="navbar container">
      <a href="#" className="logo">
        Blogr
      </a>

      {showHamburger && (
        <img
          src={mobileMenuOpen ? Close : Hamburger}
          alt="mobile menu"
          onClick={toggleMobileMenu}
          className="hamburger"
        />
      )}

      {mobileMenuOpen && <MobileMenu open={mobileMenuOpen} />}
    </header>
  );
};

export default Header;
