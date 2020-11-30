import React, { useContext, useEffect, useState } from "react";
import { List } from "antd";
import DataContext from "./../context/dataContext";
import itemsAPI from "../../api/items";
import ItemSaleCard from "./ItemSaleCard";

export default function NewSale() {
  const { store } = useContext(DataContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    populateItems();
  }, [store]);

  const populateItems = async () => {
    console.log(store);
    const data = await itemsAPI.getItems(store);
    setItems(data);
    setLoading(false);
  };

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={items}
      loading={loading}
      renderItem={item => (
        <List.Item>
          <ItemSaleCard item={item} items={items} setItems={setItems} />
        </List.Item>
      )}
    />
  );
}
