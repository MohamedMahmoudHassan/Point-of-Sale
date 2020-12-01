import React from "react";
import { Col, Row } from "antd";
import NewSaleButtons from "./NewSaleButtons";
import NewSaleItems from "./NewSaleItems";
import NewSaleTotal from "./NewSaleTotal";

export default function NewSaleBar({ items }) {
  const colStyle = { display: "flex", alignItems: "center" };

  return (
    <Row justify="space-between" style={{ marginBottom: 10 }}>
      <Col span={4} style={colStyle}>
        <NewSaleItems items={items} />
      </Col>
      <Col span={4} style={colStyle}>
        <NewSaleTotal />
      </Col>
      <Col span={4} style={colStyle}>
        <NewSaleButtons />
      </Col>
    </Row>
  );
}
