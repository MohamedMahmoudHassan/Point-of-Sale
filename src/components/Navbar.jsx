import React from "react";
import { Layout, Menu } from "antd";
import LangController from "./LangController";
import { useTranslation } from "react-i18next";

const { Header } = Layout;

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <div>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <Menu.Item key="1">{t("nav.1")}</Menu.Item>
          <Menu.Item key="2">{t("nav.2")}</Menu.Item>
          <Menu.Item key="3">{t("nav.3")}</Menu.Item>
          <Menu.Item key="4">
            <LangController />
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  );
}
