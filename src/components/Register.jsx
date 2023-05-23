import React from "react"
import AuthForm from "./AuthForm";

function Register({handleCheckStatusLoginOk, handleCheckStatusLoginError, handleCheckRegister}) {
  return (
       <AuthForm name={'register'} title={'Регистрация'}  textButton={'Зарегестрироваться'} handleCheckStatusLoginOk={handleCheckStatusLoginOk} handleCheckStatusLoginError={handleCheckStatusLoginError} handleCheckRegister={handleCheckRegister} />
  )
};

export default Register;


