import React from "react";
import { useTranslation } from "react-i18next";
import StoreForm from "./StoreForm";
import StoresAPI from "../../api/stores";

export default function NewStore() {
  const { t } = useTranslation();

  const getData = () => {
    return {};
  };

  const onFinish = async values => await StoresAPI.postStore(values);

  return (
    <StoreForm title={t("stores.storesList.addStore")} onFinish={onFinish} getData={getData} />
  );
}
