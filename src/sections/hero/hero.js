import Header from "./header";

const Hero = () => {
  return (
    <section className="hero">
      <Header />
      <div className="hero__body">
        <h1 className="hero__body-title">A modern publishing platform</h1>
        <p className="hero__body-text">
          Grow your audience and build your online brand
        </p>
      </div>
      <div className="hero__links">
        <button className="button button__cta">Start for Free</button>
        <button className="button">Learn More</button>
      </div>
    </section>
  );
};

export default Hero;
