const MobileMenu = ({ open }) => {
  return (
    <ul className={`mobileMenu ${open && "active"}`}>
      <li>
        Product
        <ul>
          <li>Overview</li>
          <li>Pricing</li>
          <li>Marketplace</li>
          <li>Features</li>
          <li>Integrations</li>
        </ul>
      </li>
      <li>
        Company
        <ul>
          <li>About</li>
          <li>Team</li>
          <li>Blog</li>
          <li>Careers</li>
        </ul>
      </li>
      <li>
        Connect
        <ul>
          <li>Contact</li>
          <li>Newsletter</li>
          <li>LinkedIn</li>
        </ul>
      </li>
    </ul>
  );
};

export default MobileMenu;
