import React from "react";
import './header.css'
import {ReactComponent as Logo} from '../../../../img/logo.svg'
import { Link,useHistory } from "react-router-dom";


const Header = () => {
  const history = useHistory()
  return (
    <header>
      <div className="logo" onClick={()=>history.push('/')}>
        <Logo />
      </div>
      <div className="ctn-btn-entrar">
        <Link to="/login"><button>Entrar</button></Link>
      </div>
    </header>
  );
};

export default Header;
