import React, { useState, useContext, useEffect } from "react";
import Receipt from "../receipts/Receipt";
import DataContext from "./../context/dataContext";
import salesAPI from "../../api/sales";

export default function TestComp() {
  const [sale, setSale] = useState({});
  const { store } = useContext(DataContext);

  useEffect(() => {
    populateSale();
  }, [store]);

  const populateSale = async () => {
    const data = await salesAPI.getSale("5fcba90fd8bc402ab4952c54");
    setSale(data);
  };
  return <Receipt seller="Mohamed" customer="Test" storeName="Restaurant" sale={sale} />;
}
