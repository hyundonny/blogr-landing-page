import FooterColumn from "../components/FooterColumn";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <h2 className="logo footer-logo">Blogr</h2>
        <FooterColumn label="Product" />
        <FooterColumn label="Company" />
        <FooterColumn label="Connect" />
      </div>
    </footer>
  );
};

export default Footer;
