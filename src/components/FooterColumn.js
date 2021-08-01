import { links } from "../assets/links";

const FooterColumn = ({ label }) => {
  return (
    <ul className="footer-column">
      <p className="footer-column-label">{label}</p>
      {links[label].map((item) => (
        <li className="footer-column-item" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default FooterColumn;
