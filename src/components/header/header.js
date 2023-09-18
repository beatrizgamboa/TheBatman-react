import React from "react";
import './styles.css'
import Logo from '../../assets/Logo.png';
import { Link } from "react-router-dom";

function Header(){

    return(
        <header>
            <img id='logo' src={Logo} />
            <nav>
                <ul>
                    <Link style={{ textDecoration: 'none' }} to='/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/contato'>
                        <li>Contato</li>
                    </Link>
                    <Link style={{ textDecoration: 'none' }} to='/fotos'>
                        <li>Fotos</li>
                    </Link>                    
                </ul>
            </nav>
        </header>
    )
}

export default Header