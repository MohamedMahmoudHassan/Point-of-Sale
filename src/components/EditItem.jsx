import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ItemForm from "./ItemForm";
import itemsAPI from "../api/items";

export default function EditItem({ match }) {
  const history = useHistory();
  const [item, setItem] = useState({});

  useEffect(() => {
    populateCategory();
  }, []);

  const populateCategory = async () => {
    const data = await itemsAPI.getItem(match.params.id);
    setItem(data);
  };

  const onFinish = async values => await itemsAPI.putItem(match.params.id, values);

  return (
    <div className="form-container">
      {item.text && <ItemForm title={item.text} onFinish={onFinish} data={item} />}
    </div>
  );
}
