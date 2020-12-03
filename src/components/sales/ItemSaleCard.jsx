import React from "react";
import { Badge, Button, Card } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";
import api from "../../config/api";
import { useTranslation } from "react-i18next";
import ItemSaleMeta from "./ItemSaleMeta";


export default function ItemSaleCard({ item, items, setItems, total, setTotal }) {
  const { t } = useTranslation();

  const changeItemQuantity = (item, quantity) => {
    const newItems = [...items];
    const itemIndex = newItems.findIndex(({ key }) => key === item.key);

    const oldQuantity = newItems[itemIndex].quantity;
    newItems[itemIndex].quantity = quantity.reset ? 0 : oldQuantity + quantity.value;
    setTotal(total + (newItems[itemIndex].quantity - oldQuantity) * newItems[itemIndex].price);
    setItems(newItems);
  };

  const isAvailableToAdd = value => item.quantity + value > item.inStock;

  return (
    <Badge count={item.quantity}>
      <Card
        hoverable
        cover={
          <img
            style={{ height: 200, objectFit: "cover" }}
            alt={item.text}
            src={item.image || api.altImage}
          />
        }
        actions={[
          <Button
            type="primary"
            disabled={isAvailableToAdd(1)}
            onClick={() => changeItemQuantity(item, { value: 1 })}
          >
            <PlusOutlined key="plus" /> 1
          </Button>,
          <Button
            type="primary"
            disabled={isAvailableToAdd(10)}
            onClick={() => changeItemQuantity(item, { value: 10 })}
          >
            <PlusOutlined key="plus" /> 10
          </Button>,
          <Button
            type="primary"
            danger
            disabled={!item.quantity}
            onClick={() => changeItemQuantity(item, { reset: true })}
          >
            <DeleteOutlined key="plus" />
          </Button>
        ]}
      >
        <ItemSaleMeta item={item} />
      </Card>
    </Badge>
  );
}
