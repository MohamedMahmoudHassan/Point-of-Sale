import React from "react";
import { Layout } from "antd";
import CategoriesList from "./CategoriesList";
import ItemsList from "./ItemsList";
import { Switch, Route } from "react-router-dom";
import NewCategory from "./NewCategory";
import NewItem from "./NewItem";
import Home from "./Home";
import EditCategory from "./EditCategory";
import EditItem from "./EditItem";
import StoresList from "./StoresList";

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
          <Route path="/items/categories/edit/:id" component={EditCategory} />
          <Route path="/items/categories/new" component={NewCategory} />
          <Route path="/items/categories" component={CategoriesList} />
          <Route path="/items/edit/:id" component={EditItem} />
          <Route path="/items/new" component={NewItem} />
          <Route path="/items" component={ItemsList} />
          <Route path="/stores" component={StoresList} />
          <Route path="/" component={Home} />
        </Switch>
      </Content>
    </Layout>
  );
}
