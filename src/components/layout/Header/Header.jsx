import'./index.css'
import Logo from'/public/img/logo.png'
import faceIcon from'/public/img/facebook.png'
import instaIcon from'/public/img/instagram.png'
import React from "react";
import {useLocation } from "react-router-dom";
function Header(){
    const location = useLocation();

    // Lista de rotas onde o Navbar deve ser renderizado
    const allowedRoutes = ["/instrucoes", "/registrar", "/editar", "/deletar", "/listar"];

    // Verifica se a rota atual está na lista de rotas permitidas
    const shouldRenderHeader = allowedRoutes.includes(location.pathname);

    // Renderiza o Navbar somente se a rota atual estiver na lista de rotas permitidas
    return shouldRenderHeader && (
        <header className='header'>
            <div className='titleContainer'>
                <img className='logo' src={Logo} alt="" />
                <div className='textHeader'>
                    <h2><span>CORPO DE </span> <br className='br'/>
                    BOMBEIROS <br className='br'/> MILITAR <span className='sp'> DE SÃO PAULO</span></h2>
                </div>
            </div>
            <div className="listContainer">
                <ul>
                    <li><a href="https://www.instagram.com/corpodebombeirosdapmesp/" target='_blank'><img src={instaIcon} alt="" /></a></li>
                    <li><a href="https://www.facebook.com/corpodebombeirosdapmesp" target='_blank'><img src={faceIcon} alt="" /></a></li>
                </ul>
            </div>

        </header>
    )
}
export default Header;