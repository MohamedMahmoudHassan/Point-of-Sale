import React, { useContext, useEffect, useState } from "react";
import { List } from "antd";
import SaleSummaryCard from "./SaleSummaryCard";
import DataContext from "./../context/dataContext";
import salesAPI from "../../api/sales";

export default function SaleSummary() {
  const [sale, setSale] = useState([]);
  const { store } = useContext(DataContext);

  useEffect(() => {
    populateItems();
  }, [store]);

  const populateItems = async () => {
    const data = await salesAPI.getSale("5fc8bec9ab46b10dd40ec85d");
    setSale(data);
  };

  return (
    <List
      itemLayout="vertical"
      size="large"
      dataSource={sale.items}
      renderItem={item => <SaleSummaryCard item={item} sale={sale} setSale={setSale} />}
    />
  );
}
