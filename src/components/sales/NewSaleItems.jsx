import React from "react";
import { Avatar } from "antd";
import colors from "../../config/colors";

export default function NewSaleItems({ items }) {
  return (
    <Avatar.Group maxCount={3} size={50} maxStyle={{ backgroundColor: colors.primary }}>
      {items.map(
        item =>
          item.quantity > 0 && (
            <Avatar
              key={item.key}
              src={<img src={item.image} alt={item.text} title={`${item.quantity} ${item.text}`} />}
            />
          )
      )}
    </Avatar.Group>
  );
}
