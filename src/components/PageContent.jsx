import React from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import CategoriesList from "./CategoriesList";
import NewCategory from "./NewCategory";
import EditCategory from "./EditCategory";
import ItemsList from "./ItemsList";
import NewItem from "./NewItem";
import EditItem from "./EditItem";
import StoresList from "./StoresList";
import NewStore from "./NewStore";
import EditStore from "./EditStore";

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
          <Route path="/stores/edit/:id" component={EditStore} />
          <Route path="/stores/new" component={NewStore} />
          <Route path="/stores" component={StoresList} />
          <Route path="/" component={Home} />
        </Switch>
      </Content>
    </Layout>
  );
}
