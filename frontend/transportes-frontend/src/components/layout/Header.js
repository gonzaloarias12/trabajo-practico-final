import React from 'react';
import '../estilos/Header.css'

const Header = (props) => {
    return (
        <header>
            <div className='holder'>
                <img src='img/logo.png' width="100" alt="Transportes X"></img>
                <h1>Transportes X</h1>
            </div>
        </header>
    );
}

export default Header;