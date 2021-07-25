import Dropdown from "../components/dropdown";
import cn from "classnames";

const MobileMenu = ({ mobileMenuOpen }) => {
  return (
    <div className={cn("mobile-menu container", { active: mobileMenuOpen })}>
      <ul className="mobile-menu__links">
        <Dropdown label="Product" />
        <Dropdown label="Company" />
        <Dropdown label="Connect" />
      </ul>
      <div className="mobile-menu__buttons">
        <button className="mobile-menu__button">Login</button>
        <button className="mobile-menu__button cta">Sign Up</button>
      </div>
    </div>
  );
};

export default MobileMenu;
