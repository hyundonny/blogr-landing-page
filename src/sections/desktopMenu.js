const DesktopMenu = () => {
  return (
    <nav className="desktop-menu">
      <ul className="dropdowns">
        <li className="labels">
          Product
          <ul className="links">
            <li className="link">Overview</li>
            <li className="link">Pricing</li>
            <li className="link">Marketplace</li>
            <li className="link">Features</li>
            <li className="link">Integrations</li>
          </ul>
        </li>
        <li className="labels">
          Company
          <ul className="links">
            <li className="link">About</li>
            <li className="link">Team</li>
            <li className="link">Blog</li>
            <li className="link">Careers</li>
          </ul>
        </li>
        <li className="labels">
          Connect
          <ul className="links">
            <li className="link">Contact</li>
            <li className="link">Newsletter</li>
            <li className="link">LinkedIn</li>
          </ul>
        </li>
      </ul>
      <div className="buttons">
        <button type="button" className="button">
          Login
        </button>
        <button type="button" className="button button__cta">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default DesktopMenu;
