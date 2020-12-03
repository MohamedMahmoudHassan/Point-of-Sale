import React from "react";
import { Card } from "antd";
import { useTranslation } from "react-i18next";

const { Meta } = Card;

export default function ItemSaleMeta({ item, type }) {
  const { t } = useTranslation();

  return (
    <Meta
      title={item.text}
      description={`${item.price} ${t("currency")} - ${item.inStock} ${t(
        "items.itemsList.inStock.label"
      )}`}
    />
  );
}
