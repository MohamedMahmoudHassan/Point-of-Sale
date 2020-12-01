import React from "react";
import { Avatar } from "antd";
import colors from "../../config/colors";

export default function NewSaleItems({ items }) {
  return (
    <Avatar.Group maxCount={3} size={50} maxStyle={{ backgroundColor: colors.primary }}>
      {items.map(item => item.quantity > 0 && <Avatar src={item.image} />)}
    </Avatar.Group>
  );
}
