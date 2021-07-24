import cn from "classnames";

const MobileMenu = ({ mobileMenuOpen }) => {
  return (
    <div className={cn("mobile-menu container", { active: mobileMenuOpen })}>
      <ul>
        <li className="mobile-menu__labels">
          <p className="mobile-menu__label">Product</p>
          <ul>
            <li>Overview</li>
            <li>Pricing</li>
            <li>Marketplace</li>
            <li>Features</li>
            <li>Integrations</li>
          </ul>
        </li>
        <li className="mobile-menu__labels">
          <p className="mobile-menu__label">Company</p>
          <ul>
            <li>About</li>
            <li>Team</li>
            <li>Blog</li>
            <li>Careers</li>
          </ul>
        </li>
        <li className="mobile-menu__labels">
          <p className="mobile-menu__label">Connect</p>
          <ul>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>LinkedIn</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
