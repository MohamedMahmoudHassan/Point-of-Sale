import React, { useContext } from "react";
import CategoryForm from "./CategoryForm";
import DataContext from "../context/dataContext";
import categoriesAPI from "../../api/categories";

export default function EditCategory({ match }) {
  const { store } = useContext(DataContext);

  const getData = async () => await categoriesAPI.getCategory(match.params.id, { isForm: true });

  const onFinish = async values =>
    await categoriesAPI.putCategory(match.params.id, { ...values, store });

  return <CategoryForm onFinish={onFinish} getData={getData} />;
}
