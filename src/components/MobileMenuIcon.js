import Hamburger from "../assets/images/icon-hamburger.svg";
import Close from "../assets/images/icon-close.svg";

const MobileMenuIcon = ({ mobileMenuOpen, toggleMobileMenu }) => {
  return (
    <div className="mobile-icon-container" onClick={toggleMobileMenu}>
      {mobileMenuOpen ? (
        <img src={Close} alt="close icon" />
      ) : (
        <img src={Hamburger} alt="hamburger icon" />
      )}
    </div>
  );
};

export default MobileMenuIcon;
