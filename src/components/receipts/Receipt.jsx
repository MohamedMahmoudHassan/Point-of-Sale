import React from "react";
import ReceiptTitle from "./ReceiptTitle";
import ReceiptSeparator from "./ReceiptSeparator";
import ReceiptMainInfo from "./ReceiptMainInfo";
import ReceiptItemsList from "./ReceiptItemsList";
import ReceiptTotal from "./ReceiptTotal";

export default function Receipt({ sale, ...mainInfo }) {
  const styles = {
    container: {
      width: "100%",
      height: 600,
      backgroundColor: "#f0f0f0",
      alignItems: "center",
      justifyContent: "center",
      display: "flex",
      flexDirection: "column"
    },
    receipt: { width: 400, backgroundColor: "white", padding: 15 }
  };

  return (
    <div style={styles.container}>
      <div style={styles.receipt}>
        <ReceiptTitle total={sale.total} />
        <ReceiptSeparator />
        <ReceiptMainInfo {...mainInfo} saleId={sale.key} />
        <ReceiptSeparator />
        <ReceiptItemsList items={sale.items} />
        <ReceiptSeparator />
        <ReceiptTotal total={sale.total} />
      </div>
    </div>
  );
}
