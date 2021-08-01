import { useState, useEffect } from "react";
import cn from "classnames";

import { links } from "../assets/links";

const Dropdown = ({ label, mobileMenuOpen }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    if (!mobileMenuOpen) {
      setDropdownOpen(false);
    }
  }, [mobileMenuOpen]);

  const handleClick = () => {
    setDropdownOpen((prev) => !prev);
  };

  const liElems = links[label].map((link) => (
    <li key={link} className="mobile-menu__nav">
      <span>{link}</span>
    </li>
  ));

  return (
    <li className="mobile-menu__labels">
      <h3 className="mobile-menu__label" onClick={handleClick}>
        {label}
      </h3>
      <ul className={cn("mobile-menu__navs", { open: dropdownOpen })}>
        {liElems}
      </ul>
    </li>
  );
};

export default Dropdown;
