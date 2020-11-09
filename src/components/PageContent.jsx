import React from "react";
import { Layout } from "antd";
import CategoriesList from "./CategoriesList";

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
        <CategoriesList />
      </Content>
    </Layout>
  );
}