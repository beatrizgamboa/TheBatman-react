import React from "react";
import './footer-styles.css'
import Logo from '../../assets/Logo.png';
import { Link } from "react-router-dom";
import {AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiFillGithub} from 'react-icons/ai'


function Footer(){

    return(
        <>
        <footer>
            <img id='logo' src={Logo} />
            <span>Todos os direitos reservados ©</span>
            <span>Desenvolvido por Beatriz Gambôa</span>
            <nav className='footer-nav'>
                <ul className='footer-list'>
                    <li>Home</li>
                    <li>Contato</li>
                    <li>Fotos</li>
                </ul>
            </nav>
            <div className="social-media">
                <Link style={{textDecoration:'none'}} to='https://instagram.com/biagamboa?igshid=OGQ5ZDc2ODk2ZA==' target="_blank">
                    <AiFillInstagram className="icon"/>
                </Link>
                <Link style={{textDecoration:'none'}} to='https://pt-br.facebook.com/biabgamboa/' target='_blank'>
                    <AiFillFacebook className="icon" />
                </Link>
                <Link style={{textDecoration:'none'}} to='https://br.linkedin.com/in/beatriz-gamb%C3%B4a-6559b3a3' target='_blank'>
                    <AiFillLinkedin className="icon" />
                </Link>
                <AiFillGithub className="icon" />
            </div>
        </footer>
        </>
    )
}

export default Footer