import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import * as Auth from './Auth';


function AuthForm({name, title, textButton, handleLogin }) {

  const navigate = useNavigate();  
  const [formValue, setFormValue] = useState({
    password: "",
    email: "",
  });
  console.log(formValue)
  
  const handleChangeInput = (evt) => {
    const {name, value} = evt.target;
    setFormValue({...formValue, [name]: value})
  }
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const { password, email } = formValue;

    if (name === 'register') {
        Auth.register({password, email})
        .then((res) => {
            navigate('/sign-in', { replace: true });
            
        })
        .catch(err => console.log(err));
        
    } else {
        Auth.authorize({password, email})
        .then((res) => {
            if (res.token) {
                localStorage.setItem('jwt', res.token);
                handleLogin(formValue.email);
                console.log(res);
                navigate('/', { replace: true });
            }
        })
        .catch(err => console.log(err));
        }
    }

    


    return (
        <div className="auth__container">
          
          <form name={`${name}-form`} className="form__auth" onSubmit={handleSubmit} noValidate>
            <h2 className="form__title-auth">{title}</h2>
            
            <input
            id="input-email"
            required
            minLength="2"
            maxLength="40"
            type="email"
            placeholder="E-mail"
            name="email"
            className="form__item-auth form__item_el_email"
            onChange={handleChangeInput}
            value= {formValue.email}
          />
          <span id="input-email-error" className="popup__error"></span>
          <input
            id="input-password"
            required
            minLength="2"
            maxLength="200"
            type="password"
            placeholder="Пароль"
            name="password"
            className="form__item-auth form__item_el_password"
            onChange={handleChangeInput} 
            // value={password || ""}
            value={formValue.password || ""}
          />
          <span id="input-password-error" className="popup__error"></span>
            <button type="submit" className="auth__submit">{textButton}</button>
          </form>
          {name === 'register' && (
          <Link to="/sign-in" className="button__sign-in">Уже зарегистрированы? Войти</Link>
          )}
        </div>
    )
}

export default AuthForm;