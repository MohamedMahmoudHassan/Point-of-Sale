import React from "react";
import { Button, Col, Row, Typography } from "antd";
import { useTranslation } from "react-i18next";
import formatIntAsCurrency from "../../Utils/formatIntAsCurrency";

const { Title } = Typography;

export default function SaleSummaryHeader({ total, navBack, changeStatus }) {
  const { t } = useTranslation();
  return (
    <Row justify="space-between">
      <Col>
        <Button type="default" size="large" onClick={navBack}>
          {t("sales.back")}
        </Button>
      </Col>
      <Col>
        <Title level={3}>
          {t("sales.total")}: {formatIntAsCurrency(total)} {t("currency")}
        </Title>
      </Col>
      <Col>
        <Button type="primary" size="large" onClick={() => changeStatus("Completed")}>
          {t("sales.completeSale")}
        </Button>
      </Col>
    </Row>
  );
}
