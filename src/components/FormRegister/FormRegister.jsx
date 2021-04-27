import React from "react";
import Icono from "../assets/Icono.png";
import Social from "../Social/Social";
import "./FormRegister.scss";

const FormRegister = () => {
  return (
    <div className="form-usuario">
      <div className="logo">
        <div className="logo-container">
          <a className="imagen1" />
          <div className="imagen2" />
        </div>
      </div>
      <form>
        <div className="titulo-form">
          <h3 className="titulo-mobile">Registrarse en be positivite</h3>
        </div>
        <div className="campo-form">
          <label htmlFor="name/email">Email/Nombre de usuario</label>
          <input
            type="name/email"
            id="name/email"
            name="name/email"
            placeholder="Ingresa email o nombre de usuario"
          />
        </div>
        <div className="campo-form">
          <label htmlFor="name">Nombre</label>
          <input
            type="name"
            id="name"
            name="name"
            placeholder="Ingresa nombre"
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
        <div className="campo-form-checkbox">
          <input
            type="checkbox"
            id="checkbox"
            name="checkbox"
            placeholder="Ingrese contraseña"
          />
          <label htmlFor="checkbox">Aceptar términos y condiciones</label>
        </div>
        <div className="campo-form-2">
          <input type="submit" value="Crear una cuenta" className="btn-1" />
          <input
            className="btn-2"
            type="submit"
            value="Registrarse con otra cuenta"
          />
        </div>
        <a href={"/nueva-cuenta"} className="enlace-cuenta2">
          o iniciar sesión con otra cuenta
        </a>
      </form>
      {/* <Social/> */}
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
