import React from "react";
import { Typography } from "antd";
import formatIntAsCurrency from "../../Utils/formatIntAsCurrency";
import { useTranslation } from "react-i18next";

const { Title } = Typography;

export default function NewSaleTotal({ total }) {
  const { t } = useTranslation();

  return (
    <div>
      {total > 0 && (
        <Title level={3}>
          {t("sales.newSale.total")}: {formatIntAsCurrency(total)} {t("currency")}
        </Title>
      )}
    </div>
  );
}
