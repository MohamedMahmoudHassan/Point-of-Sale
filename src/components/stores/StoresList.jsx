import React from "react";
import { useTranslation } from "react-i18next";
import DataTable from "../common/DataTable";
import storesAPI from "../../api/stores";

export default function StoresList() {
  const { t } = useTranslation();
  const columns = [
    {
      title: t("stores.storesList.name.label"),
      dataIndex: "text",
      sorter: { compare: (a, b) => (a.text.toLowerCase() < b.text.toLowerCase() ? -1 : 1) }
    },
    {
      title: t("stores.storesList.noOfCategories.label"),
      dataIndex: "noOfCategories",
      sorter: { compare: (a, b) => a.noOfCategories - b.noOfCategories }
    },
    {
      title: t("stores.storesList.noOfItems.label"),
      dataIndex: "noOfItems",
      sorter: { compare: (a, b) => a.noOfItems - b.noOfItems }
    }
  ];

  return (
    <DataTable
      newButtonTitle={t("stores.storesList.addStore")}
      columns={columns}
      getData={storesAPI.getStores}
      deleteData={storesAPI.deleteStores}
      navTo="/stores"
    />
  );
}
