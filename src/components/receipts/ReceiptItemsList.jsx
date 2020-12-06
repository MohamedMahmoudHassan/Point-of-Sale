import React from "react";
import ReceiptItem from "./ReceiptItem";

export default function ReceiptItemsList({ items }) {
  const styles = {
    container: {
      padding: "7px 0px"
    }
  };
  return (
    <div style={styles.container}>
      {items &&
        items.map(item => (
          <ReceiptItem
            itemName={item.item.text}
            itemPrice={item.item.price}
            itemQuantity={item.quantity}
            key={item.item.key}
          />
        ))}
    </div>
  );
}
