import React from "react";
import { Layout } from "antd";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import SalesNavigation from "./sales/SalesNavigation";
import CategoriesNavigation from "./categories/CategoriesNavigation";
import ItemsNavigation from "./items/ItemsNavigation";
import StoresNavigation from "./stores/StoresNavigation";

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
          <Route path="/items/categories" component={CategoriesNavigation} />
          <Route path="/items" component={ItemsNavigation} />
          <Route path="/stores" component={StoresNavigation} />
          <Route path="/sales" component={SalesNavigation} />
          <Route path="/" component={Home} />
        </Switch>
      </Content>
    </Layout>
  );
}
