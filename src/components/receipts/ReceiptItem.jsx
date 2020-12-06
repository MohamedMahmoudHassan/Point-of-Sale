import React from "react";
import formatIntAsCurrency from "../../Utils/formatIntAsCurrency";

export default function ReceiptItem({ itemName, itemPrice, itemQuantity }) {
  const styles = {
    container: {
      fontWeight: 500,
      fontSize: 15
    },
    itemQuantity: { fontSize: 14, fontWeight: "normal" },
    itemPrice: { float: "right" }
  };

  return (
    <div style={styles.container}>
      <div style={styles.itemPrice}>{formatIntAsCurrency(itemPrice * itemQuantity)}</div>
      <div>{itemName}</div>
      <div style={styles.itemQuantity}>
        {itemQuantity} x {formatIntAsCurrency(itemPrice)}
      </div>
    </div>
  );
}
