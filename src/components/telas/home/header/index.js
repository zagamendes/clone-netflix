import React from "react";
import './header.css'
import {ReactComponent as Logo} from '../../../../img/logo.svg'
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <header>
      <div className="logo">
        <Logo />
      </div>
      <div className="ctn-btn-entrar">
        <Link to="/login"><button>Entrar</button></Link>
      </div>
    </header>
  );
};

export default Header;
