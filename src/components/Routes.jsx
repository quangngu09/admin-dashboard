import React from "react";
import { Route, Switch } from "react-router-dom";
import DashBoard from "../pages/DashBoard";
import Customer from "../pages/Customer";

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={DashBoard} />
      <Route path="/customers" component={Customer} />
    </Switch>
  );
};

export default Routes;
