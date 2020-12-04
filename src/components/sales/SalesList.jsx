import React, { useContext } from "react";
import { Tag } from "antd";
import DataTable from "./../common/DataTable";
import salesAPI from "../../api/sales";
import { useTranslation } from "react-i18next";
import DataContext from "./../context/dataContext";

export default function SalesList() {
  const { t } = useTranslation();
  const { store } = useContext(DataContext);

  const columns = [
    {
      title: t("sales.status"),
      dataIndex: "status",
      filters: salesAPI.salesStatus,
      onFilter: (value, record) => record.status === value,
      render: status => <Tag color={salesAPI.statusColor[status]}>{status}</Tag>
    },
    {
      title: t("sales.noOfItems"),
      dataIndex: "items",
      render: items => items.length,
      sorter: { compare: (a, b) => a.items.length - b.items.length }
    },
    {
      title: t("sales.total"),
      dataIndex: "total",
      sorter: { compare: (a, b) => a.total - b.total }
    },
    {
      title: t("sales.lastUpdate"),
      dataIndex: "lastUpdateOn",
      render: lastUpdateOn => new Date(lastUpdateOn).toUTCString().slice(5, -4),
      sorter: { compare: (a, b) => a.lastUpdateOn - b.lastUpdateOn }
    }
  ];

  const getData = async () => await salesAPI.getSales(store);

  return (
    <DataTable
      newButtonTitle={t("sales.newSale")}
      columns={columns}
      getData={getData}
      deleteData={() => {}}
      navTo="/sales/summary"
      clickable={true}
    />
  );
}
