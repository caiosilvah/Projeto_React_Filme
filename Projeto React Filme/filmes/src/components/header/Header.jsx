import "./Header.css";
import Logo from "../../assets/img/logo.svg"

const Header = () => {
    return(
        <header>
            <div className="layout_grid cabecalho">
                <img src={Logo} alt="Logo Filmoteca" />

                <nav className="nav_header">
                    <a className="link_header">Filme</a>
                    <a className="link_header">Gênero</a>
                </nav>
            </div>
        </header>
        
    )
}

export default Header;