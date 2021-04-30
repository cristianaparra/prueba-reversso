import React from "react";
import { Link } from "react-router-dom";
import "./Social.scss";

const Social = props => {
  return (
    <div id="miModal" className="social_modal" style={{ display: props.show ? "inline-block" : "none" }}>
      <div className="card_social">
          <span className="line"/>
        <div className="card_social-text">
          <Link to="/inicio-mobil" onClick={() => props.onClose()}>X</Link>
          <p className="text">Selecciona tu cuenta</p>
        </div>
        <Link to="/login-mobil">
          <div className="apple"/>
          <p>Continua con Apple ID</p>
        </Link>
        <Link to="/login-mobil">
          <div className="facebook"/>
          <p>Continua con Facebook</p>
        </Link>
        <Link to="/login-mobil">
          <div className="google"/>
          <p>Continua con Google</p>
        </Link>
      </div>
    </div>
  );
};

export default Social;
