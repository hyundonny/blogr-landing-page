import editor from "../images/illustration-editor-desktop.svg";

const Body = () => {
  return (
    <>
      <section className="body top">
        <h2 className="heading">Designed for the future</h2>
        <div className="main">
          <div className="text-area">
            <div>
              <h3 className="heading">Introducing an extensible editor</h3>
              <p className="copy">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
          </div>
          <div className="image-area">
            <img src={editor} alt="editor" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Body;
