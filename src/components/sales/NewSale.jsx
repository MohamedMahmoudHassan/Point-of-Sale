import React, { useContext, useEffect, useState } from "react";
import { List } from "antd";
import DataContext from "./../context/dataContext";
import itemsAPI from "../../api/items";
import ItemSaleCard from "./ItemSaleCard";
import SaleStatusBar from "./NewSaleBar";

export default function NewSale() {
  const { store } = useContext(DataContext);
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

  return (
    <div>
      <SaleStatusBar items={items} setItems={setItems} total={total} />
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={items}
        loading={loading}
        renderItem={item => (
          <List.Item>
            <ItemSaleCard
              item={item}
              items={items}
              setItems={setItems}
              total={total}
              setTotal={setTotal}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
