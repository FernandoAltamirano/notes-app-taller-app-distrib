import React from "react";

import "../sass/SuccessMessage.scss";
import check from "../images/check.svg";
export default function SuccessMessage(props) {
  return (
    <div
      id="message"
      className={`successMessage ${props.displaySuccessMessage}`}
    >
      <p>Enviado con exito</p>
      <img src={check} alt="" />
    </div>
  );
}
