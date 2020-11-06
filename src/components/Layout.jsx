import React from "react";
import { Layout, ConfigProvider } from "antd";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import PageContent from "./PageContent";

export default function AppLayout() {
  return (
    <ConfigProvider direction="ltr">
      <Layout>
        <Navbar />
        <Layout>
          <SideMenu />
          <PageContent />
        </Layout>
      </Layout>
    </ConfigProvider>
  );
}
