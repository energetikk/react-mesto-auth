import React from "react";
// import logoSuccess from "../images/success.png"
// // import logoNoSuccess from "../images/nosuccess.png"

function InfoTooltip({name, logo, textMessage, isOpen, onClose}) {
    return (
      <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : "" }`}>
        <div className="popup__container popup_message">
          
            <img className="" src={logo}/>
            <h3 className="message__title">{textMessage}</h3>
            
          <button onClick={onClose} type="button" className="popup__button-close"></button>
        </div>
      </div>
    )
}

export default InfoTooltip;



// function InfoTooltip({name, statusInfo, isOpen, onClose}) {
//   return (
//     <div className={`popup popup_${name} ${isOpen ? 'popup_opened' : "" }`}>
//       <div className="popup__container">
//         {statusInfo ?
//         (<>
//         <img className="" src={logoSuccess}/>
//         <h3 className="info__title">Вы успешно вошли</h3>
//         </>) : (
//           <>
//           <img className="" src={logoNoSuccess}/>
//           <h3 className="info__title">Что-то пошло не так</h3>
//           </>
//         )
//         }
//         <button onClick={onClose} type="button" className="popup__button-close"></button>
//       </div>
//     </div>
//   )
// }