import mobileLaptop from "../assets/images/illustration-laptop-mobile.svg";
import desktopLaptop from "../assets/images/illustration-laptop-desktop.svg";

const MainBottom = () => {
  return (
    <section className="main-bottom">
      <div className="flex-container">
        <div className="image-area">
          <img src={mobileLaptop} alt="laptop" className="mobile-image" />
          <img src={desktopLaptop} alt="laptop" className="desktop-image" />
        </div>
        <div className="text-area">
          <h3 className="main__subheading dark-heading">Free, open, simple</h3>
          <p className="dark-copy">
            Blogr is a free and open source application backed by a large
            community of helpful developers. It supports features such as code
            syntax highlighting, RSS feeds, social media integration,
            third-party commenting tools, and works seamlessly with Google
            Analytics. The architecture is clean and is relatively easy to
            learn.
          </p>
          <h3 className="main__subheading dark-heading">Powerful tooling</h3>
          <p className="dark-copy">
            Batteries included. We built a simple and straightforward CLI tool
            that makes customization and deployment a breeze, but capable of
            producing even the most complicated sites.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainBottom;
