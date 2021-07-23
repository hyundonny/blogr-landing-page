import { useState, useEffect, useCallback } from "react";

import MobileMenuIcon from "./mobileMenuIcon";
import MobileMenu from "./mobileMenu";
import DesktopMenu from "./desktopMenu";

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
  });

  return (
    <header className="navbar container">
      <a href="#" className="logo">
        Blogr
      </a>

      {showHamburger ? (
        <MobileMenuIcon
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      ) : (
        <DesktopMenu />
      )}
    </header>
  );
};

export default Header;
