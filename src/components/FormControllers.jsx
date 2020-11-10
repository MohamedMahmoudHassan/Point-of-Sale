import React from "react";
import { Button, Row, Col } from "antd";
import colors from "../config/colors";
import { useHistory } from "react-router-dom";

export default function FormControllers() {
  const history = useHistory();

  const handleNav = () => {
    history.goBack();
  };

  return (
    <Row justify="end">
      <Col>
        <Button type="primary" htmlType="submit" onClick={handleNav}>
          Save
        </Button>
      </Col>
      <Col>
        <Button
          htmlType="button"
          style={{ color: colors.primary, borderColor: colors.primary, marginLeft: "8px" }}
          onClick={handleNav}
        >
          Cancel
        </Button>
      </Col>
    </Row>
  );
}
