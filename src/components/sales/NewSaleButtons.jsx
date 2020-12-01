import React from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

export default function NewSaleButtons() {
  const { t } = useTranslation();
  return (
    <div>
      <Button type="primary" size="large" style={{ marginBottom: 5, width: 150 }}>
        {t("sales.newSale.makeSale")}
      </Button>
      <Button type="ghost" size="large" style={{ marginBottom: 5, width: 150 }}>
        {t("sales.newSale.cancel")}
      </Button>
    </div>
  );
}
