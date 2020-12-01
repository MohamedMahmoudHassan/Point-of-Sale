import React from "react";
import { Badge, Button, Card } from "antd";
import { PlusOutlined, DeleteOutlined } from "@ant-design/icons";

const { Meta } = Card;

export default function ItemSaleCard({ item, items, setItems, total, setTotal }) {
  const changeItemQuantity = (item, quantity) => {
    const newItems = [...items];
    const itemIndex = newItems.findIndex(({ key }) => key === item.key);

    const oldQuantity = newItems[itemIndex].quantity || 0;
    newItems[itemIndex].quantity = quantity.reset ? 0 : oldQuantity + quantity.value;
    setTotal(total + (newItems[itemIndex].quantity - oldQuantity) * newItems[itemIndex].price);
    setItems(newItems);
  };

  return (
    <Badge count={item.quantity}>
      <Card
        hoverable
        cover={<img style={{ height: 200, objectFit: "cover" }} alt={item.text} src={item.image} />}
        actions={[
          <Button type="primary" onClick={() => changeItemQuantity(item, { value: 1 })}>
            <PlusOutlined key="plus" /> 1
          </Button>,
          <Button type="primary" onClick={() => changeItemQuantity(item, { value: 10 })}>
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
        <Meta title={item.text} />
      </Card>
    </Badge>
  );
}
