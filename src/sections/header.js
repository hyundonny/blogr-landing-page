import MobileMenuIcon from "./mobileMenuIcon";
import DesktopMenu from "./desktopMenu";

const Header = ({ showHamburger, mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <header className="navbar container">
      <a href="http://localhost:3000/" className="logo">
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
