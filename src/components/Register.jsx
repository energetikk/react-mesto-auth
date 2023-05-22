import React from "react"
import AuthForm from "./AuthForm";

function Register({handleCheckStatusLoginOk, handleCheckStatusLoginError}) {
  return (
       <AuthForm name={'register'} title={'Регистрация'}  textButton={'Зарегестрироваться'} handleCheckStatusLoginOk={handleCheckStatusLoginOk} handleCheckStatusLoginError={handleCheckStatusLoginError} />
  )
};

export default Register;


