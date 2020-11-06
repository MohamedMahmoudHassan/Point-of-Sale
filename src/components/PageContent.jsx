import React from "react";
import { Layout, Breadcrumb } from "antd";

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
        Content of the page
      </Content>
    </Layout>
  );
}
