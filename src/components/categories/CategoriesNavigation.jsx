import React from "react";
import { Switch, Route } from "react-router-dom";
import CategoriesList from "./CategoriesList";
import NewCategory from "./NewCategory";
import EditCategory from "./EditCategory";

export default function CategoriesNavigation() {
  return (
    <Switch>
      <Route path="/items/categories/edit/:id" component={EditCategory} />
      <Route path="/items/categories/new" component={NewCategory} />
      <Route path="/items/categories" component={CategoriesList} />
    </Switch>
  );
}
