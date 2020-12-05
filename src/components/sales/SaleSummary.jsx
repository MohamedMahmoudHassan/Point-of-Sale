import React, { useContext, useEffect, useState } from "react";
import { List } from "antd";
import SaleSummaryCard from "./SaleSummaryCard";
import DataContext from "./../context/dataContext";
import salesAPI from "../../api/sales";
import SaleSummaryFooter from "./SaleSummaryFooter";
import SaleSummaryHeader from "./SaleSummaryHeader";
import { useHistory } from "react-router-dom";

export default function SaleSummary({ match }) {
  const [sale, setSale] = useState([]);
  const [loading, setLoading] = useState(true);
  const { store } = useContext(DataContext);
  const history = useHistory();

  useEffect(() => {
    populateSales();
  }, [store]);

  const populateSales = async () => {
    const data = await salesAPI.getSale(match.params.id);
    setSale(data);
    setLoading(false);
  };

  const navBack = () => {
    history.push("/sales");
  };

  const changeStatus = async newStatus => {
    const newSale = { ...sale };
    newSale.status = newStatus;
    setSale(newSale);
    await salesAPI.putSale(sale.key, { ...newSale, store });
    navBack();
  };

  return (
    <List
      header={
        <SaleSummaryHeader total={sale.total} navBack={navBack} changeStatus={changeStatus} />
      }
      itemLayout="vertical"
      size="large"
      loading={loading}
      dataSource={sale.items}
      renderItem={item => <SaleSummaryCard item={item} sale={sale} setSale={setSale} />}
      footer={<SaleSummaryFooter changeStatus={changeStatus} />}
    />
  );
}
