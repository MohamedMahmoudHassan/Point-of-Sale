import React from "react";
import { Button, Col, Row } from "antd";
import { useTranslation } from "react-i18next";

export default function SaleSummaryFooter({ changeStatus }) {
  const { t } = useTranslation();
  return (
    <Row justify="end">
      <Col>
        <Button type="primary" size="large" onClick={() => changeStatus("Updated")}>
          {t("sales.saveAsDraft")}
        </Button>
      </Col>
      <Col flex="8px" />
      <Col>
        <Button type="primary" danger size="large" onClick={() => changeStatus("Cancelled")}>
          {t("sales.cancelSale")}
        </Button>
      </Col>
    </Row>
  );
}
