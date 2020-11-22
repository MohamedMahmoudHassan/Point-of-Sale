import React from "react";
import ItemForm from "./ItemForm";
import itemsAPI from "../api/items";
import { useTranslation } from "react-i18next";

export default function NewItem() {
  const { t } = useTranslation();

  const onFinish = async values => await itemsAPI.postItem(values);

  return (
    <div className="form-container">
      <ItemForm title={t("items.itemsList.addItem")} onFinish={onFinish} />
    </div>
  );
}
