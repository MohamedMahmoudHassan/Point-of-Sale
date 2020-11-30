import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import DataContext from "../context/dataContext";
import ItemForm from "./ItemForm";
import itemsAPI from "../../api/items";

export default function NewItem() {
  const { t } = useTranslation();
  const { store } = useContext(DataContext);

  const getData = () => {
    return {};
  };

  const onFinish = async values => await itemsAPI.postItem({ ...values, store });

  return <ItemForm title={t("items.itemsList.addItem")} onFinish={onFinish} getData={getData} />;
}
