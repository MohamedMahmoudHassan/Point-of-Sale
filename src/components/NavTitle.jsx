import React from "react";
import { useTranslation } from "react-i18next";
import { Route, Switch } from "react-router-dom";

export default function NavTitle() {
  const { t } = useTranslation();

  return (
    <h1 style={{ color: "white" }}>
      <Switch>
        <Route
          path="/items/categories"
          component={() => t("items.categoriesList.categoriesList")}
        />
        <Route path="/items" component={() => t("items.itemsList.itemsList")} />
        <Route path="/" component={() => t("home")} />
      </Switch>
    </h1>
  );
}
