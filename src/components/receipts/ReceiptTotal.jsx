import React from "react";
import formatIntAsCurrency from "../../Utils/formatIntAsCurrency";

export default function ReceiptTotal({ total }) {
  const styles = {
    container: {
      padding: "7px 0px",
      display: "flex",
      justifyContent: "space-between",
      fontWeight: "bold",
      fontSize: 15
    }
  };

  return (
    <div style={styles.container}>
      <div>Total</div>
      <div style={styles.itemPrice}>{formatIntAsCurrency(total)}</div>
    </div>
  );
}
