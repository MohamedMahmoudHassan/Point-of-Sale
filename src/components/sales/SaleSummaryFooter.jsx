import React from "react";
import { Button, Col, Row } from "antd";
import { useTranslation } from "react-i18next";

export default function SaleSummaryFooter() {
  const { t } = useTranslation();
  return (
    <Row justify="end">
      <Col>
        <Button type="primary" size="large">
          {t("sales.saveAsDraft")}
        </Button>
      </Col>
      <Col flex="8px" />
      <Col>
        <Button type="primary" danger size="large">
          {t("sales.cancelSale")}
        </Button>
      </Col>
    </Row>
  );
}
