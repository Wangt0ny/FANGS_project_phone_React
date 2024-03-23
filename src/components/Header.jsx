import './css/header.css'
import logo from '../assets/Logo.png'

function Header() {

    function test() {
        document.querySelector(".list li").style.color = "red"
    }

    return (
        <header className="navbar-menu">
            <nav className="menu-bar">
                <a className="logo">
                    <img src={logo} alt="logo" />
                </a>

                <div className="login">
                    <span id="table-number">桌號 1</span>
                    <a className="login-btn">
                        <i className="bi bi-receipt-cutoff" onClick={test}></i>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
