import React from "react";
import { Row, Col, Layout, Menu } from "antd";
import LangController from "./LangController";
import { useTranslation } from "react-i18next";

const { Header } = Layout;

export default function Navbar() {
  const { t } = useTranslation();

  return (
    <div>
      <Header className="header">
        <Row>
          <Col flex="auto">
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">{t("nav.1")}</Menu.Item>
              <Menu.Item key="2">{t("nav.2")}</Menu.Item>
              <Menu.Item key="3">{t("nav.3")}</Menu.Item>
            </Menu>
          </Col>
          <Col flex="100px">
            <LangController />
          </Col>
        </Row>
      </Header>
    </div>
  );
}
