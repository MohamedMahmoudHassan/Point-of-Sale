import React from "react";
import { Button, Row, Col } from "antd";
import colors from "../config/colors";

export default function FormControllers() {
  return (
    <Row justify="end">
      <Col>
        <Button type="primary" htmlType="submit">
          Save
        </Button>
      </Col>
      <Col>
        <Button
          htmlType="button"
          style={{ color: colors.primary, borderColor: colors.primary, marginLeft: "8px" }}
        >
          Cancel
        </Button>
      </Col>
    </Row>
  );
}
