import React from "react";
import { Link } from "react-router-dom";
import SucessMobile from "../SucessMobile/SucessMobile";
import Icono from "../assets/Icono.png";

import "./Form.scss";

const Form = () => {
  return (
    <div className="form-usuario1">
      <div className="logo">
        <div className="logo-container">
          <a className="imagen1" />
        </div>
      </div>
      <Link to='/inicio-mobil'>
      <div className="imagen2" />
      </Link>
      <form>
        <div className="titulo-form">
          <h2 className="titulo">Bienvenidos</h2>
          <h3 className="titulo">Inicie sesión ingresando su cuenta aqui</h3>
          <h3 className="titulo-mobile">
            Inicie sesión para utilizar la aplicación
          </h3>
        </div>
        <div className="campo-form1">
          <label htmlFor="name">Email/Nombre de usuario</label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Ingresa email o nombre de usuario"
          />
        </div>
        <div className="campo-form1">
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
        <div className="campo-form2">
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
          <div className="Apple" />
          <div className="Facebook" />
          <div className="Google" />
        </div>
        <div className="enlace-cuenta3">
          ¿Eres un nuevo usuario?{"  "}
          <Link to="/registro" className="crear-cuenta">
            Crear una cuenta
          </Link>
        </div>
      </form>
      <SucessMobile />
    </div>
  );
};

export default Form;
