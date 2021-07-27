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
        <button className="button mobile">Login</button>
        <button className="button bg-gradient">Sign Up</button>
      </div>
    </div>
  );
};

export default MobileMenu;
