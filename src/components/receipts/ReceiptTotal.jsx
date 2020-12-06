import React from "react";
import formatIntAsCurrency from "../../Utils/formatIntAsCurrency";

export default function ReceiptTotal({ total }) {
  const styles = {
    container: {
      padding: "7px 0px",
      fontWeight: "bold",
      fontSize: 15
    },
    itemPrice: { float: "right" }
  };

  return (
    <div style={styles.container}>
      <div style={styles.itemPrice}>{formatIntAsCurrency(total)}</div>
      <div>Total</div>
    </div>
  );
}
