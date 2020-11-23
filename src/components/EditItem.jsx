import React, { useEffect, useState } from "react";
import ItemForm from "./ItemForm";
import itemsAPI from "../api/items";

export default function EditItem({ match }) {
  const [item, setItem] = useState({});

  useEffect(() => {
    populateCategory();
  }, []);

  const populateCategory = async () => {
    const data = await itemsAPI.getItem(match.params.id);
    data.category = data.category.value;
    setItem(data);
  };

  const onFinish = async values => await itemsAPI.putItem(match.params.id, values);

  return (
    <div className="form-container">
      {item.text && <ItemForm title={item.text} onFinish={onFinish} data={item} />}
    </div>
  );
}
