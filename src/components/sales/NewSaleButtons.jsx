import React from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";

export default function NewSaleButtons({ total, setTotal, items, setItems }) {
  const { t } = useTranslation();
  const options = {
    size: "large",
    disabled: !total,
    style: { marginBottom: 5, width: 150 }
  };

  const resetItemsQuantities = () => {
    const newItems = [...items];
    setTotal(0);
    setItems(
      newItems.map(item => {
        item.quantity = 0;
        return item;
      })
    );
  };

  return (
    <div>
      <Button type="primary" {...options}>
        {t("sales.makeSale")}
      </Button>
      <Button type="ghost" {...options} onClick={resetItemsQuantities}>
        {t("sales.cancel")}
      </Button>
    </div>
  );
}
