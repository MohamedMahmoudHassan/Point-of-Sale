import React from "react";
import { List, InputNumber, Button } from "antd";
import ItemSaleMeta from "./ItemSaleMeta";
import { useTranslation } from "react-i18next";
import formatIntAsCurrency from "../../Utils/formatIntAsCurrency";

export default function SaleSummaryCard({ item, sale, setSale }) {
  const { t } = useTranslation();

  const onDelete = () => {
    const newSale = { ...sale };
    newSale.items = newSale.items.filter(saleItem => saleItem.item.key !== item.item.key);
    setSale(newSale);
  };

  return (
    <List.Item
      style={{ backgroundColor: "white" }}
      key={item.item.text}
      actions={[
        <div>
          {t("sales.quantity")}
          <InputNumber
            min={1}
            max={item.item.inStock}
            defaultValue={item.quantity}
            style={{ marginLeft: 20 }}
          />
        </div>,
        <div>{`${formatIntAsCurrency(item.quantity * item.item.price)} ${t("currency")}`}</div>,
        <Button type="primary" danger onClick={onDelete}>
          {t("sales.delete")}
        </Button>
      ]}
      extra={
        <img
          height={95}
          width={150}
          alt={item.item.text}
          src={item.item.image}
          style={{ objectFit: "cover" }}
        />
      }
    >
      <ItemSaleMeta item={item.item} type="list" />
    </List.Item>
  );
}
