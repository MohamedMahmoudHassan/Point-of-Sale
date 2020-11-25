import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import ItemForm from "./ItemForm";
import itemsAPI from "../api/items";
import DataContext from "./context/dataContext";

export default function NewItem() {
  const { t } = useTranslation();
  const { store } = useContext(DataContext);

  const getData = () => {
    return {};
  };

  const onFinish = async values => await itemsAPI.postItem({ ...values, store });

  return <ItemForm title={t("items.itemsList.addItem")} onFinish={onFinish} getData={getData} />;
}
