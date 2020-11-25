import React, { useContext, useEffect, useState } from "react";
import ItemForm from "./ItemForm";
import itemsAPI from "../api/items";
import DataContext from "./context/dataContext";

export default function EditItem({ match }) {
  const [item, setItem] = useState({});
  const { store } = useContext(DataContext);

  useEffect(() => {
    populateCategory();
  }, []);

  const populateCategory = async () => {
    const data = await itemsAPI.getItem(match.params.id);
    data.category = data.category.value;
    setItem(data);
  };

  const onFinish = async values => await itemsAPI.putItem(match.params.id, { ...values, store });

  return (
    <div className="form-container">
      {item.text && <ItemForm title={item.text} onFinish={onFinish} data={item} />}
    </div>
  );
}
