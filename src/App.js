import React from "react";
import { Form } from "./components/Form";
import { Start } from "./components/Start";
import { Sucess } from "./components/Sucess";
import { FormRegister } from "./components/FormRegister";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./styles/App.scss";

const App = () => {
  return (
    <Router>
      <Sucess />
      <div className="landing">
        <Switch>
          <Route exact path="/">
            <Start />
            <Form />
          </Route>
          <Route path="/registro">
            <Start />
            <FormRegister />
          </Route>
          <Route path="/inicio-mobil">
            <Start />
          </Route>
          <Route path="/login-mobil">
            <Form />
          </Route>
          <Route path="/registro-mobil">
            <FormRegister />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
