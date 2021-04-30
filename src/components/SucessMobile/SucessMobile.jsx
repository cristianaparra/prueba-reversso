import React from "react";
import "./SucessMobile.scss";

const SucessMobile = props => {
  return (
    <div className="Sucess-bar-mobil" style={{ display: props.show ? "inline-block" : "none" }}>
      <p>Felicidades te haz registrado exitosamente.</p>
    </div>
  );
};

export default SucessMobile;
