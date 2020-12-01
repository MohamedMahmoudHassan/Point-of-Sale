import React from "react";
import { Avatar } from "antd";
import colors from "../../config/colors";
import api from "../../config/api";

export default function NewSaleItems({ items }) {
  return (
    <Avatar.Group maxCount={3} size={50} maxStyle={{ backgroundColor: colors.primary }}>
      {items.map(
        item =>
          item.quantity > 0 && (
            <Avatar
              key={item.key}
              src={
                <img
                  src={item.image || api.altImage}
                  alt={item.text}
                  title={`${item.quantity} ${item.text}`}
                />
              }
            />
          )
      )}
    </Avatar.Group>
  );
}
