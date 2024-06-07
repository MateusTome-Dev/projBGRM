import'./index.css'
import Logo from'/public/img/logo.png'
import React from "react";
import { Link, useLocation } from "react-router-dom";
function HeaderHome(){
    const location = useLocation();

    // Lista de rotas onde o Navbar deve ser renderizado
    const allowedRoutes = ["/", "/signup"];

    // Verifica se a rota atual está na lista de rotas permitidas
    const shouldRenderHeader = allowedRoutes.includes(location.pathname);

    // Renderiza o Navbar somente se a rota atual estiver na lista de rotas permitidas
    return shouldRenderHeader && (
        <header className='headerHome'>
            <div className='titleContainerHome'>
                
                    <img className='logoHome' src={Logo} alt="" />
                    
                <div className='textHeaderHome'>
                    <h2><span>CORPO DE </span> <br className='brHome'/>
                    BOMBEIROS <br className='brHome'/> MILITAR <span className='sp'> DE SÃO PAULO</span></h2>
                </div>
            </div>
            <div className="listContainerHome">
                <ul>
                <li><Link className='root' to="/">Entrar</Link></li>
                <li><Link className='root' to="/signup">Cadastrar</Link></li>
                </ul>
            </div>

        </header>
    )
}
export default HeaderHome;