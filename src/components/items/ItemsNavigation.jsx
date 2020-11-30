import React from "react";
import { Switch, Route } from "react-router-dom";
import ItemsList from "./ItemsList";
import NewItem from "./NewItem";
import EditItem from "./EditItem";

export default function ItemsNavigation() {
  return (
    <Switch>
      <Route path="/items/edit/:id" component={EditItem} />
      <Route path="/items/new" component={NewItem} />
      <Route path="/items" component={ItemsList} />
    </Switch>
  );
}
