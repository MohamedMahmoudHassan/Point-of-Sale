import React, { useContext } from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import salesAPI from "../../api/sales";
import DataContext from "./../context/dataContext";
import { useHistory } from "react-router-dom";

export default function NewSaleButtons({ total, setTotal, items, setItems }) {
  const { t } = useTranslation();
  const { store } = useContext(DataContext);
  const history = useHistory();

  const options = {
    size: "large",
    disabled: !total,
    style: { marginBottom: 5, width: 150 }
  };

  const resetItemsQuantities = () => {
    const newItems = [...items];
    setTotal(0);
    setItems(
      newItems.map(item => {
        item.quantity = 0;
        return item;
      })
    );
  };

  const createNewSale = async () => {
    const sale = {
      items: items.map(item => {
        return { item, quantity: item.quantity };
      }),
      total,
      store,
      status: "Created"
    };
    const { data } = await salesAPI.postSale(sale);
    history.push("/sales/summary/" + data._id);
  };

  return (
    <div>
      <Button type="primary" {...options} onClick={createNewSale}>
        {t("sales.makeSale")}
      </Button>
      <Button type="ghost" {...options} onClick={resetItemsQuantities}>
        {t("sales.cancel")}
      </Button>
    </div>
  );
}
