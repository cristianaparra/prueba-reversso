import React from "react";
import "./Start.scss";

const Start = () => {
  return (
    <div className="inicio">
      <div className="logo">
        <div className="logo-container">
          <div className="imagen1" />
          <p>Gestiona tus seguidores de forma segura</p>
          <div className="imagen2" />
        </div>
      </div>
      <div className="login-mobile">
        <div className="login-mobile-text">
          <p>Bienvenidos!</p>
          <h2>Conecta con tus seguidores</h2>
        </div>
        <div className="login-mobile-buttons">
          <a className="btn-azul" href="#">Iniciar Sesión</a>
          <a className="btn-transarente" href="#">Iniciar sesión con otra cuenta</a>
          <div className="link-nuevo-usuario">
            ¿Eres un nuevo usuario?<a className="link" href="#"> Crear una cuenta</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Start;
