import React from "react";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import DataForm from "./common/DataForm";

export default function StoreForm({ ...rest }) {
  const { t } = useTranslation();

  return (
    <DataForm
      {...rest}
      navTo="/stores"
      formItems={[
        {
          label: t("stores.storesList.name.label"),
          name: "text",
          rules: [{ required: true, message: t("stores.storesList.name.warning") }],
          Component: Input
        }
      ]}
    />
  );
}
