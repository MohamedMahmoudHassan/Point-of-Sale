import React from "react";
import { Col, Row } from "antd";
import NewSaleButtons from "./NewSaleButtons";
import NewSaleItems from "./NewSaleItems";
import NewSaleTotal from "./NewSaleTotal";

export default function NewSaleBar(props) {
  const colStyle = { display: "flex", alignItems: "center" };

  return (
    <Row justify="space-between" style={{ marginBottom: 10 }}>
      <Col span={4} style={colStyle}>
        <NewSaleItems items={props.items} />
      </Col>
      <Col span="auto" style={colStyle}>
        <NewSaleTotal total={props.total} />
      </Col>
      <Col span={4} style={colStyle}>
        <NewSaleButtons {...props} />
      </Col>
    </Row>
  );
}
