import React, { useContext, useEffect, useState } from "react";
import CategoryForm from "./CategoryForm";
import categoriesAPI from "../api/categories";
import DataContext from "./context/dataContext";

export default function EditCategory({ match }) {
  const [category, setCategory] = useState({});
  const { store } = useContext(DataContext);

  useEffect(() => {
    populateCategory();
  }, []);

  const populateCategory = async () => {
    const data = await categoriesAPI.getCategory(match.params.id);
    setCategory(data);
  };

  const onFinish = async values =>
    await categoriesAPI.putCategory(match.params.id, { ...values, store });

  return (
    <div className="form-container">
      {category.text && <CategoryForm title={category.text} onFinish={onFinish} data={category} />}
    </div>
  );
}
