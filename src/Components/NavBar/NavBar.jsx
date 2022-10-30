import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => {
  
  return (
    <div className="fondo">
      <header className="row">
        <div className="d-flex justify-content-around align-items-center">
          <p className="icon-title ">
            <Link
              to={"/"}
              className="span-title"
              style={{ textDecoration: "none", color: "#F4F6F7" }}
            >
              Mi <span>Sueño</span>
            </Link>
          </p>
          <nav>
            <ul className="text-white d-flex menu">
              <li>
                <Link to={"/"} className="link">
                  Home
                </Link>
              </li>
              <li>
                Categorias
                <ul className="d-flex align-items-center flex-column subMenu">
                  <li>
                    <Link to={"/productos/procesadores"} className="link">
                      Procesadores
                    </Link>
                  </li>
                  <li>
                    <Link to={"/productos/monitores"} className="link">
                      Monitores
                    </Link>
                  </li>
                  <li>
                    <Link to={"/productos/perifericos"} className="link">
                      Perifericos
                    </Link>
                  </li>
                  <li>
                    <Link to={"/productos/almacenamiento"} className="link">
                      Almacenamiento
                    </Link>
                  </li>
                  <li>
                    <Link to={"/productos/sillas-gamers"} className="link">
                      Sillas Gamers
                    </Link>
                  </li>
                  <li>
                    <Link to={"/productos/placas-de-video"} className="link">
                      Placas de Video
                    </Link>
                  </li>
                  <li>
                    <Link to={"/productos/gabinetes"} className="link">
                      Gabinetes
                    </Link>
                  </li>
                  <li>
                    <Link to={"/productos/memorias"} className="link">
                      Memorias
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          <CartWidget />
        </div>
      </header>
    </div>
  );
};

export default NavBar;
