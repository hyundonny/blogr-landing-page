import Dropdown from "../../components/Dropdown";
import hamburger from "../../images/icon-hamburger.svg";

const Header = () => {
  return (
    <header className="hero__header">
      <p className="hero__header-logo">Blogr</p>

      <div className="hero__header-icon hide-for-desktop">
        <img src={hamburger} alt="hamburger icon" />
      </div>

      <div className="hero__header-dropdowns hide-for-mobile">
        <Dropdown label={"Product"} />
        <Dropdown label={"Company"} />
        <Dropdown label={"Connect"} />
      </div>

      <div className="hero__header-buttons hide-for-mobile">
        <button className="button no-border">Login</button>
        <button className="button button__cta">Sign Up</button>
      </div>
    </header>
  );
};

export default Header;
