import React from "react";
import { Switch, Route } from "react-router-dom";
import StoresList from "./StoresList";
import NewStore from "./NewStore";
import EditStore from "./EditStore";

export default function StoresNavigation() {
  return (
    <Switch>
      <Route path="/stores/edit/:id" component={EditStore} />
      <Route path="/stores/new" component={NewStore} />
      <Route path="/stores" component={StoresList} />
    </Switch>
  );
}
