import React from "react";
import logo from "../images/logo.svg";
import {useLocation} from "react-router-dom"
import { Link } from "react-router-dom";

function Header({register, login}) {

  const location = useLocation();

  return (
    <>
      <header className="auth">
      <img src={logo} alt="Логотип соцсети Mesto" className="header__logo" />
      {location.pathname === "/sign-up" ? 
        (<Link className="auth_button" to="/sign-in">{login}</Link>):
        (<Link className="auth_button" to="/sign-up">{register}</Link>)   
        }

      {/* <nav className="auth">
        <button className="auth_button">email@email.ru</button>
        <button className="auth_button">Войти</button>
      </nav> */}
    </header>
    <div className="header__line"></div>
    </>
  );
}

export default Header;
