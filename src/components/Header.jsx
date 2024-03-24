import './css/header.css'
import logo from '../assets/Logo.png'
import { useEffect, useState } from 'react';

function Header() {

    let [tableNumber, setTableNumber] = useState(0)
    useEffect(getTableNumber, [])

    function getTableNumber() {
        let urlParams = new URLSearchParams(location.search);
        let tableNum = urlParams.get("table");
        setTableNumber(tableNum)
    }

    return (
        <header className="navbar-menu">
            <nav className="menu-bar">
                <a className="logo">
                    <img src={logo} alt="logo" />
                </a>

                <div className="login">
                    <span id="table-number">桌號 {tableNumber}</span>
                    <a className="login-btn">
                        <i className="bi bi-receipt-cutoff"></i>
                    </a>
                </div>
            </nav>
        </header>
    );
}

export default Header;
