import React from "react";
import { useHistory } from "react-router-dom";
import ItemForm from "./ItemForm";
import itemsAPI from "../api/items";

export default function NewItem() {
  const history = useHistory();

  const onFinish = async values => {
    await itemsAPI.postCategory(values);
    history.push("/items");
  };

  return (
    <div className="form-container">
      <ItemForm title="New Item" onFinish={onFinish} />
    </div>
  );
}
