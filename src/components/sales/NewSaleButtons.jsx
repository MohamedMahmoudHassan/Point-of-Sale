import React from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

export default function NewSaleButtons({ total }) {
  const { t } = useTranslation();
  const options = {
    size: "large",
    disabled: !total,
    style: { marginBottom: 5, width: 150 }
  };

  return (
    <div>
      <Button type="primary" {...options}>
        {t("sales.newSale.makeSale")}
      </Button>
      <Button type="ghost" {...options}>
        {t("sales.newSale.cancel")}
      </Button>
    </div>
  );
}
