import React from "react";
import logo from "../images/logo.svg";

function Header() {
  return (
    <>
    <header className="header">
      <img src={logo} alt="Логотип соцсети Mesto" className="header__logo" />
      <nav className="auth">
        <button className="auth_button">email@email.ru</button>
        <button className="auth_button">Войти</button>
      </nav>
    </header>
    <div className="header__line"></div>
    </>
  );
}

export default Header;
