import React, { useContext } from "react";
import DataContext from "../context/dataContext";
import ItemForm from "./ItemForm";
import itemsAPI from "../../api/items";

export default function EditItem({ match }) {
  const { store } = useContext(DataContext);

  const getData = async () => await itemsAPI.getItem(match.params.id, true);

  const onFinish = async values => await itemsAPI.putItem(match.params.id, { ...values, store });

  return <ItemForm onFinish={onFinish} getData={getData} />;
}
