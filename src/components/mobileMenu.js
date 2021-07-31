import Dropdown from "./dropdown";
import cn from "classnames";

const MobileMenu = ({ mobileMenuOpen }) => {
  const stopBubbling = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={cn("mobile-menu container", { active: mobileMenuOpen })}
      onClick={stopBubbling}
    >
      <ul className="mobile-menu__links">
        <Dropdown label="Product" mobileMenuOpen={mobileMenuOpen} />
        <Dropdown label="Company" mobileMenuOpen={mobileMenuOpen} />
        <Dropdown label="Connect" mobileMenuOpen={mobileMenuOpen} />
      </ul>
      <div className="mobile-menu__buttons">
        <button className="button mobile">Login</button>
        <button className="button bg-gradient">Sign Up</button>
      </div>
    </div>
  );
};

export default MobileMenu;
