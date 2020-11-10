import React from "react";
import { Button, Row, Col } from "antd";
import colors from "../config/colors";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function FormControllers() {
  const history = useHistory();
  const { t } = useTranslation();

  const handleNav = () => {
    history.goBack();
  };

  return (
    <Row justify="end">
      <Col>
        <Button type="primary" htmlType="submit" onClick={handleNav}>
          {t("form.save")}
        </Button>
      </Col>
      <Col flex="8px" />
      <Col>
        <Button
          htmlType="button"
          style={{ color: colors.primary, borderColor: colors.primary }}
          onClick={handleNav}
        >
          {t("form.cancel")}
        </Button>
      </Col>
    </Row>
  );
}
