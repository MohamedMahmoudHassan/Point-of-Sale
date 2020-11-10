import React from "react";
import { Layout } from "antd";
import CategoriesList from "./CategoriesList";
import ItemsList from "./ItemsList";
import { Switch, Route } from "react-router-dom";
import NewCategory from "./NewCategory";

const { Content } = Layout;

export default function PageContent() {
  return (
    <Layout style={{ padding: "0 24px 24px" }}>
      <Content
        className="site-layout-background"
        style={{
          padding: 24,
          margin: 0,
          minHeight: 300
        }}
      >
        <Switch>
          <Route path="/items/categories/new" component={NewCategory} />
          <Route path="/items/categories" component={CategoriesList} />
          <Route path="/items" component={ItemsList} />
        </Switch>
      </Content>
    </Layout>
  );
}
