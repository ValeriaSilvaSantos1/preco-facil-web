import Logo from "../assets/logo-preco-facil.png";
import "./Header.css";

function Header() {
  return (
    <header className="header-container">
      <div className="header-logo-area">
        <img src={Logo} alt="Logo Preço Fácil" className="logo-pequena" />
      </div>
      <div className="header-nav-area">
        <button type="button" className="btn-historico" disabled>
          Histórico
        </button>
      </div>
    </header>
  );
}

export default Header;