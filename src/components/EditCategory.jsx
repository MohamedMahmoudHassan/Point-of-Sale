import React, { useContext } from "react";
import CategoryForm from "./CategoryForm";
import categoriesAPI from "../api/categories";
import DataContext from "./context/dataContext";

export default function EditCategory({ match }) {
  const { store } = useContext(DataContext);

  const getData = async () => await categoriesAPI.getCategory(match.params.id, { isForm: true });

  const onFinish = async values =>
    await categoriesAPI.putCategory(match.params.id, { ...values, store });

  return <CategoryForm onFinish={onFinish} getData={getData} />;
}
