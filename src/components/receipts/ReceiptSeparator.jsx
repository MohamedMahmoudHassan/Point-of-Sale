import React from "react";

export default function ReceiptSeparator() {
  const styles = {
    line: {
      width: "100%",
      border: "1px dashed #C5C5C5"
    }
  };
  return <div style={styles.line} />;
}
