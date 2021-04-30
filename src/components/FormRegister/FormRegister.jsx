import React, { useState } from "react";
import { Link } from "react-router-dom";
import Social from "../Social/Social";
import Icono from "../assets/Icono.png";

import "./FormRegister.scss";

const FormRegister = () => {
  const [state, setState] = useState({
    showModal: false,
  });
  return (
    <div className="form-usuario">
      <Social
        show={state.showModal}
        onClose={() => setState({ showModal: false })}
      />
      <div className="logo">
        <div className="logo-container">
          <a className="imagen1" />
        </div>
        <Link to="/inicio-mobil">
          <div className="imagen2" />
        </Link>
      </div>
      <form>
        <div className="titulo-form">
          <h3 className="titulo">Registrarse en be positivite</h3>
        </div>
        <div className="campo-form1">
          <label htmlFor="name/email">Email/Nombre de usuario</label>
          <input
            type="name/email"
            id="name/email"
            name="name/email"
            placeholder="Ingresa email o nombre de usuario"
          />
        </div>
        <div className="campo-form1">
          <label htmlFor="name">Nombre</label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Ingresa nombre"
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
        <div className="campo-form-checkbox">
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            placeholder="Ingrese contraseña"
          />
          <label htmlFor="checkbox">Aceptar términos y condiciones</label>
        </div>
        <div className="campo-form2">
          <Link to="/login-mobil" className="btn-1">
            Crear una cuenta
          </Link>
          <Link onClick={() => setState({ showModal: true })} className="btn-2">
            Registrarse con otra cuenta
          </Link>
        </div>
        <Link to="/nueva-cuenta" className="enlace-cuenta2">
          o iniciar sesión con otra cuenta
        </Link>
        <div className="card_social">
          <div className="Apple" />
          <div className="Facebook" />
          <div className="Google" />
        </div>
      </form>
      <div className="enlace-cuenta3">
        ¿Ya eres usuario?
        <a href={"/nueva-cuenta"} className="crear-cuenta">
          Ingresar
        </a>
      </div>
    </div>
  );
};

export default FormRegister;
