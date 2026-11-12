import { Link } from "react-router-dom";
import Logo from "../../assets/logo-preco-facil.png";
import "./style.css";

function Header() {
  return (
    <header className="header-container">
      <div className="header-logo-area">
        <Link to="/">
          <img src={Logo} alt="Logo Preço Fácil" className="logo-pequena" />
        </Link>
      </div>
      <nav className="header-nav-area">
        <Link to="/" className="btn-nav-link">
          Início
        </Link>
        <Link to="/historico" className="btn-nav-link">
          Histórico
        </Link>
      </nav>
    </header>
  );
}

export default Header;