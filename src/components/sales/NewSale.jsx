import React, { useContext, useEffect, useState } from "react";
import { List, Card } from "antd";
import DataContext from "./../context/dataContext";
import itemsAPI from "../../api/items";

export default function NewSale() {
  const { store } = useContext(DataContext);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    populateItems();
  }, [store]);

  const populateItems = async () => {
    console.log(store);
    const  data = await itemsAPI.getItems(store);
    setItems(data);
    setLoading(false);
    console.log(data);
    console.log(loading);
  };

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={items}
      loading={loading}
      renderItem={item => (
        <List.Item>
          <Card title={item.text}>{item.text}</Card>
        </List.Item>
      )}
    />
  );
}
