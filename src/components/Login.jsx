import React from "react"
import AuthForm from "./AuthForm";

function Login({handleLogin, }) {
  return (
    <AuthForm name={'login'} title={'Вход'}  textButton={'Войти'} handleLogin={handleLogin} />
  )
};

export default Login;
