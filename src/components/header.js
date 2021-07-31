import MobileMenuIcon from "./mobileMenuIcon";
import DesktopMenu from "./DesktopMenu";

const Header = ({ showHamburger, mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <header className="navbar less-padding">
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
