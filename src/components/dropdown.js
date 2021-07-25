import { useState } from "react";
import cn from "classnames";

const links = {
  Product: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
  Company: ["About", "Team", "Blog", "Careers"],
  Connect: ["Contact", "Newsletter", "LinkedIn"],
};

const Dropdown = ({ label }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClick = () => {
    console.log(dropdownOpen);
    setDropdownOpen((prev) => !prev);
  };

  const liElems = links[label].map((link) => (
    <li className="mobile-menu__nav">{link}</li>
  ));

  return (
    <li className="mobile-menu__labels">
      <p className="mobile-menu__label" onClick={handleClick}>
        {label}
      </p>
      <ul className={cn("mobile-menu__navs", { open: dropdownOpen })}>
        {liElems}
      </ul>
    </li>
  );
};

export default Dropdown;
