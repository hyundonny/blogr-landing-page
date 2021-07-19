import hamburger from "../images/icon-hamburger.svg";

const Hero = () => {
  return (
    <section className="hero">
      <header className="hero__header">
        <h1 className="hero__header-logo">Blogr</h1>
        <div className="hero__header-icon">
          <img src={hamburger} alt="hamburger icon" />
        </div>
      </header>
    </section>
  );
};

export default Hero;
