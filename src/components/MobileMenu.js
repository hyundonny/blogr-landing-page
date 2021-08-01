import Dropdown from "./Dropdown";
import cn from "classnames";

const MobileMenu = ({ mobileMenuOpen }) => {
  const stopBubbling = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className={cn("mobile-menu", { active: mobileMenuOpen })}
      onClick={stopBubbling}
    >
      <ul className="mobile-menu__links">
        <Dropdown label="Product" mobileMenuOpen={mobileMenuOpen} />
        <Dropdown label="Company" mobileMenuOpen={mobileMenuOpen} />
        <Dropdown label="Connect" mobileMenuOpen={mobileMenuOpen} />
      </ul>
      <div className="mobile-menu__buttons">
        <button className="button noBgDark">Login</button>
        <button className="button bgGradient">Sign Up</button>
      </div>
    </div>
  );
};

export default MobileMenu;
