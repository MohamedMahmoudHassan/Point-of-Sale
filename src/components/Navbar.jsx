import React from "react";
import { Row, Col, Layout } from "antd";
import LangController from "./LangController";
import NavTitle from "./NavTitle";
import SideMenuToggleButton from "./SideMenuToggleButton";
import StoreSelector from "./StoreSelector";

const { Header } = Layout;

export default function Navbar() {
  return (
    <Header>
      <Row>
        <Col flex="40px">
          <SideMenuToggleButton />
        </Col>
        <Col flex="auto">
          <NavTitle />
        </Col>
        <Col flex="170px">
          <StoreSelector />
        </Col>
        <Col flex="100px">
          <LangController />
        </Col>
      </Row>
    </Header>
  );
}
