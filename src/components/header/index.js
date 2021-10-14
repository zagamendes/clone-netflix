import React from "react";
import './header.css'
import {ReactComponent as Logo} from '../../img/logo.svg'
import { Link } from "react-router-dom";


const Header = ({isBlack}) => {
  return (
    <header className={`header-browse ${ isBlack==true ? 'black-header' : ''}`}>
      <div className="logo">
        <Logo />
      </div>
      <div className="ctn-btn-entrar">
        <img src="https://occ-0-417-3852.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABUCZYfPbupvQjzSa3egePk8TFNDy2A_w15DEAq50IqW8MYmOtmbWwN4Txem7mgNYEMPJ1BY6uasiIJQ8JeFO3EU.png?r=b97" />
      </div>
    </header>
  );
};

export default Header;
