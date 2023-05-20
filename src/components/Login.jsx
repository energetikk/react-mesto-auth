import React from "react"
import AuthForm from "./AuthForm";

function Login({handleLogin}) {
  return (
    <AuthForm name={'login'} title={'Вход'}  textButton={'Войти'} handleLogin={handleLogin}/>
  )
};

export default Login;


































// import React from "react";
// import { Link } from "react-router-dom";




// function Login({name, title, textButton, onHandleSubmit}) {

//   const [formValue, setFormValue] = useState({
//     password: "",
//     email: "",
//   })
  
//   const handleChangeInput = (evt) => {
//     const {name, value} = evt.target;
//     setFormValue({
//       ...formValue,
//       [name]: value
//     })
//   }
  
//   const handleSubmit = (evt) => {
//     evt.preventDefault();
//     onHandleSubmit(formValue, setFormValue);
//   }


//     return (
//         <div className="auth__container">
          
//           <form name={`${name}-form`} className="form__auth" onSubmit={handleSubmit} noValidate>
//             <h2 className="form__title-auth">{title}</h2>
            
//             <input
//             id="input-email"
//             required
//             minLength="2"
//             maxLength="40"
//             type="email"
//             placeholder="E-mail"
//             name="useremail"
//             className="form__item-auth form__item_el_email"
//             onChange={handleChangeInput}
//             value= {formValue.email || ""}
//           />
//           <span id="input-email-error" className="popup__error"></span>
//           <input
//             id="input-password"
//             required
//             minLength="2"
//             maxLength="200"
//             type="userpassword"
//             placeholder="Пароль"
//             name="password"
//             className="form__item-auth form__item_el_password"
//             onChange={handleChangeInput}
//             // value={password || ""}
//             value={formValue.password || ""}
//           />
//           <span id="input-password-error" className="popup__error"></span>
//             <button type="submit" className="auth__submit">{textButton}</button>
//           </form>
//           {name === 'register' && (
//           <Link to="/sign-in" className="button__sign-in">Уже зарегистрированы? Войти</Link>
//           )}
//         </div>
//       // </div>
//     )
// }

// export default Login;