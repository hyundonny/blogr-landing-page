import MobileMenuIcon from "./MobileMenuIcon";
import DesktopMenu from "./DesktopMenu";

const Header = ({ showHamburger, mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <header className="navbar">
      <h2 className="logo">Blogr</h2>
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
