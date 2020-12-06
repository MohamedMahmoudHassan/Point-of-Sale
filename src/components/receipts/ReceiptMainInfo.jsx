import React from "react";

export default function ReceiptMainInfo({ storeName, seller, customer, saleId }) {
  const styles = {
    container: {
      padding: "7px 0px",
      fontSize: 14,
      fontWeight: 500
    }
  };
  return (
    <div style={styles.container}>
      <div>Store: {storeName}</div>
      <div>Seller: {seller}</div>
      <div>Customer: {customer}</div>
      <div>Sale ID: {saleId}</div>
    </div>
  );
}
