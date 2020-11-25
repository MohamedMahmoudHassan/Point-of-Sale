import React, { useContext } from "react";
import ItemForm from "./ItemForm";
import itemsAPI from "../api/items";
import { useTranslation } from "react-i18next";
import DataContext from "./context/dataContext";

export default function NewItem() {
  const { t } = useTranslation();
  const { store } = useContext(DataContext);

  const onFinish = async values => await itemsAPI.postItem({ ...values, store });

  return (
    <div className="form-container">
      <ItemForm title={t("items.itemsList.addItem")} onFinish={onFinish} />
    </div>
  );
}
