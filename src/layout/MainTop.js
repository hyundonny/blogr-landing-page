import editorDesktop from "../assets/images/illustration-editor-desktop.svg";
import editorMobile from "../assets/images/illustration-editor-mobile.svg";

const MainTop = () => {
  return (
    <section>
      <div className="main-top__container">
        <h2 className="main__heading dark-heading">Designed for the future</h2>
        <div className="main-top__flexbox">
          <div className="main__text-area more-padding">
            <div className="main__texts">
              <h3 className="main__subheading dark-heading ">
                Introducing an extensible editor
              </h3>
              <p className="dark-copy">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
              <h3 className="main__subheading dark-heading">
                Robust content management
              </h3>
              <p className="dark-copy">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </div>
          </div>
          <div className="main-top__image-area">
            <div className="main__image-constraint">
              <img
                src={editorDesktop}
                alt="editor"
                className="desktop-image main__image-right"
              />
              <img src={editorMobile} alt="editor" className="mobile-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainTop;
