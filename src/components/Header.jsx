import React from "react";
import logo from "../images/logo.svg";
import {useLocation} from "react-router-dom"
import { Link } from "react-router-dom";

function Header({loggedIn, emailUser, singOut}) {

  const location = useLocation();

  return (
    <>
      <header className="auth">
      <img src={logo} alt="Логотип соцсети Mesto" className="header__logo" />
        {loggedIn ? (
          <>
            <p className="header__email">{emailUser}</p>
            <Link onClick={singOut} to="/sign-in" >Выйти</Link> 
          </> ) : (
            <>
              {location.pathname === "/sign-up" ? 
                (<Link className="auth_button" to="/sign-in">Войти</Link>) :
                (<Link className="auth_button" to="/sign-up">Регистрация</Link>)   
                }
            </>
          )}
    </header>
    <div className="header__line"></div>
    </>
  );
}

export default Header;



{/* <img src={logo} alt="Логотип соцсети Mesto" className="header__logo" />
      
      {location.pathname === "/sign-up" ? 
        (<Link className="auth_button" to="/sign-in">Войти</Link>):
        (<Link className="auth_button" to="/sign-up">Регистрация</Link>)   
        } 

        
        {loggedIn &&
          <>
            <p className="header__email">{emailUser}</p>
            <Link onClick={singOut} to="/sign-in" >Выйти</Link> 
          </> } */}