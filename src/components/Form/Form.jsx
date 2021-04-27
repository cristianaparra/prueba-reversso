import React from "react";
import Icono from "../assets/Icono.png";
import Apple from "../assets/Apple.png";
import Facebook from "../assets/Facebook.png";
import Google from "../assets/Google.png";

import "./Form.scss";

const Form = () => {
  return (
    <div className="form-usuario1">
      <div className="logo">
        <div className="logo-container">
          <a className="imagen1" />
        </div>
      </div>
      <div className="imagen2" />
      <form>
        <div className="titulo-form">
          <h2 className="titulo">Bienvenidos</h2>
          <h3 className="titulo">Inicie sesión ingresando su cuenta aqui</h3>
          <h3 className="titulo-mobile">
            Inicie sesión para utilizar la aplicación
          </h3>
        </div>
        <div className="campo-form">
          <label htmlFor="name">Email/Nombre de usuario</label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Ingresa email o nombre de usuario"
          />
        </div>
        <div className="campo-form">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Ingrese contraseña"
          ></input>
        </div>
        <img className="icono" src={Icono}></img>
        <a href={"/nueva-cuenta"} className="enlace-cuenta">
          ¿Olvidaste tu contraseña?
        </a>
        <div className="campo-form-2">
          <input type="submit" value="Iniciar Sesión" className="btn-1" />
          <input
            className="btn-2"
            type="submit"
            value="Iniciar sesion con otra cuenta"
          />
        </div>
        <a href={"/nueva-cuenta"} className="enlace-cuenta2">
          o iniciar sesión con otra cuenta
        </a>
      <div className="card_social">
        <a href="https://Apple.com">
          <img src={Apple} />
        </a>
        <a href="https://facebook.com/">
          <img src={Facebook} />
        </a>
        <a href="https://google.com/">
          <img src={Google} />
        </a>
      </div>
      </form>
      <div className="enlace-cuenta3">
        ¿Eres un nuevo usuario?{"  "}
        <a href={"/nueva-cuenta"} className="crear-cuenta">
          Crear una cuenta
        </a>
      </div>
    </div>
  );
};

export default Form;
