import phones from "../assets/images/illustration-phones.svg";

const MainMiddle = () => {
  return (
    <section className="main-middle">
      <div className="main-middle__container">
        <div className="main-middle_image-area">
          <img src={phones} alt="mobile phones" />
        </div>
        <div className="main-middle__text-area">
          <h3 className="main--middle__heading white">
            State of the Art Infrastructure
          </h3>
          <p className="white">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MainMiddle;
