import React, { useContext, useEffect, useState } from "react";
import { List } from "antd";
import SaleSummaryCard from "./SaleSummaryCard";
import DataContext from "./../context/dataContext";
import salesAPI from "../../api/sales";
import SaleSummaryFooter from "./SaleSummaryFooter";
import SaleSummaryHeader from "./SaleSummaryHeader";

export default function SaleSummary({ match }) {
  const [sale, setSale] = useState([]);
  const [loading, setLoading] = useState(true);
  const { store } = useContext(DataContext);

  useEffect(() => {
    populateItems();
  }, [store]);

  const populateItems = async () => {
    const data = await salesAPI.getSale(match.params.id);
    setSale(data);
    setLoading(false);
  };

  return (
    <List
      header={<SaleSummaryHeader total={sale.total} />}
      itemLayout="vertical"
      size="large"
      loading={loading}
      dataSource={sale.items}
      renderItem={item => <SaleSummaryCard item={item} sale={sale} setSale={setSale} />}
      footer={<SaleSummaryFooter />}
    />
  );
}
