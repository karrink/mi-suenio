import { Link } from "react-router-dom";
import "./Footer.css"

const Footer = () => {
  return (
    <div className="row footer">
      <p className="icon-title ">
        <Link to={"/"} className="span-title" style={{ textDecoration: "none", color: "#F4F6F7" }}>Mi <span>Sueño</span></Link>
      </p>
      <p>Carro Leonardo</p>
    </div>
  );
};

export default Footer;
