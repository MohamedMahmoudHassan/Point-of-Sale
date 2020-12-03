import React from "react";
import { Switch, Route } from "react-router-dom";
import NewSale from "./NewSale";
import SaleSummary from './SaleSummary';

export default function SalesNavigation() {
  return (
    <Switch>
      <Route path="/sales/summary/:id" component={SaleSummary} />
      <Route path="/sales/new" component={NewSale} />
    </Switch>
  );
}
