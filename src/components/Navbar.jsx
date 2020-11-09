import React from "react";
import { Row, Col, Layout } from "antd";
import LangController from "./LangController";
import NavTitle from "./NavTitle";

const { Header } = Layout;

export default function Navbar() {
  return (
    <div>
      <Header className="header">
        <Row justify="end">
          <Col flex="auto">
            <NavTitle />
          </Col>
          <Col flex="100px">
            <LangController />
          </Col>
        </Row>
      </Header>
    </div>
  );
}
