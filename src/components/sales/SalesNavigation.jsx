import React from "react";
import { Switch, Route } from "react-router-dom";
import NewSale from "./NewSale";

export default function SalesNavigation() {
  return (
    <Switch>
      <Route path="/sales/new" component={NewSale} />
    </Switch>
  );
}
