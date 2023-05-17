import React from "react";
import { Link } from "react-router-dom";

function Login({name, title, textButton, onSubmit}) {
    return (
        <div className="auth__container">
          
          <form name={`${name}-form`} className="form__auth" onSubmit={onSubmit} noValidate>
            <h2 className="form__title-auth">{title}</h2>
            
            <input
            id="input-email"
            required
            minLength="2"
            maxLength="40"
            type="email"
            placeholder="E-mail"
            name="useremail"
            className="form__item-auth form__item_el_email"
            // onChange={handleChangeName}
            // value={name || ""}
          />
          <span id="input-email-error" className="popup__error"></span>
          <input
            id="input-password"
            required
            minLength="2"
            maxLength="200"
            type="userpassword"
            placeholder="Пароль"
            name="password"
            className="form__item-auth form__item_el_password"
            // onChange={handleChangeDescription}
            // value={description || ""}
          />
          <span id="input-password-error" className="popup__error"></span>
            <button type="submit" className="auth__submit">{textButton}</button>
          </form>
          {name === 'register' && (
          <Link to="/sign-in" className="button__sign-in">Уже зарегистрированы? Войти</Link>
          )}
        </div>
      // </div>
    )
}

export default Login;