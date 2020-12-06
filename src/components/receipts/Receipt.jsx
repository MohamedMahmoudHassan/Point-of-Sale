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
      height: "auto",
      backgroundColor: "#f0f0f0",
      padding: 30
    },
    receipt: {
      width: 350,
      height: "auto",
      margin: "0 auto",
      position: "relative",
      backgroundColor: "white",
      padding: 15
    }
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
