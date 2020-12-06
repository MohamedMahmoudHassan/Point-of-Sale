import React from "react";
import formatIntAsCurrency from "../../Utils/formatIntAsCurrency";
import { useTranslation } from "react-i18next";

export default function ReceiptTitle({ total }) {
  const { t } = useTranslation();
  const styles = {
    container: {
      textAlign: "center"
    }
  };
  return (
    <div style={styles.container}>
      <h3>Total</h3>
      <h2>{`${formatIntAsCurrency(total)} ${t("currency")}`}</h2>
    </div>
  );
}
