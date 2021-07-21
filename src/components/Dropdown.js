import { useState } from "react";

const Dropdown = ({ label }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownOptions = {
    Product: ["Overview", "Pricing", "Marketplace", "Features", "Integrations"],
    Company: ["About", "Team", "Blog", "Careers"],
    Connect: ["Contact", "Newsletter", "LinkedIn"],
  };

  const changeState = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <li
      className="hero__header-dropdown"
      onMouseEnter={changeState}
      onMouseLeave={changeState}
    >
      <p className="hero__header-dropdown-label">{label}</p>
      <div
        className={
          "hero__header-dropdown-options " + (dropdownOpen ? "open" : "closed")
        }
      >
        {dropdownOptions[label].map((o) => (
          <div key={`${label}-${o}`} className="hero__header-dropdown-option">
            {o}
          </div>
        ))}
      </div>
    </li>
  );
};

export default Dropdown;
