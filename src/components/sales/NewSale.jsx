import React, { useContext, useEffect, useState } from "react";
import { List } from "antd";
import DataContext from "./../context/dataContext";
import itemsAPI from "../../api/items";
import ItemSaleCard from "./ItemSaleCard";
import SaleStatusBar from "./NewSaleBar";
import EmptyComp from "./../common/Empty";
import { useTranslation } from "react-i18next";

export default function NewSale() {
  const { store } = useContext(DataContext);
  const { t } = useTranslation();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    populateItems();
  }, [store]);

  const populateItems = async () => {
    const data = await itemsAPI.getItems(store);
    setItems(
      data.map(item => {
        item.quantity = 0;
        return item;
      })
    );
    setLoading(false);
  };

  const state = { items, setItems, total, setTotal };

  return (
    <div>
      <SaleStatusBar {...state} />
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={items}
        loading={loading}
        locale={{ emptyText: <EmptyComp description={t("items.itemsList.empty")} /> }}
        renderItem={item => (
          <List.Item>
            <ItemSaleCard item={item} {...state} />
          </List.Item>
        )}
      />
    </div>
  );
}
