import React from "react";
import formatIntAsCurrency from "../../Utils/formatIntAsCurrency";

export default function ReceiptItem({ itemName, itemPrice, itemQuantity }) {
  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      fontWeight: 500
    },
    itemName: { fontSize: 15, flexDirection: "column" },
    itemQuantity: { fontSize: 14, fontWeight: "normal" },
    itemPrice: { fontSize: 15 }
  };

  return (
    <div style={styles.container}>
      <div style={styles.itemName}>
        <div>{itemName}</div>
        <div style={styles.itemQuantity}>
          {itemQuantity} x {formatIntAsCurrency(itemPrice)}
        </div>
      </div>
      <div style={styles.itemPrice}>{formatIntAsCurrency(itemPrice * itemQuantity)}</div>
    </div>
  );
}
