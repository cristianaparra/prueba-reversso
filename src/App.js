import React from "react";
import { Form } from "./components/Form";
import { Start } from "./components/Start";
import { FormRegister } from "./components/FormRegister";
import "./styles/App.scss";

const App = () => {
  return (
    <div className="landing">
      <Start />
      <Form />
      <FormRegister />
    </div>
  );
};

export default App;
