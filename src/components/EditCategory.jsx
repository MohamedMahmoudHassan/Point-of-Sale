import React, { useEffect, useState } from "react";
import CategoryForm from "./CategoryForm";
import categoriesAPI from "../api/categories";

export default function EditCategory({ match }) {
  const [category, setCategory] = useState({});

  useEffect(() => {
    populateCategory();
  }, []);

  const populateCategory = async () => {
    const data = await categoriesAPI.getCategory(match.params.id);
    setCategory(data);
  };

  const onFinish = async values => await categoriesAPI.putCategory(match.params.id, values);

  return (
    <div className="form-container">
      {category.text && <CategoryForm title={category.text} onFinish={onFinish} data={category} />}
    </div>
  );
}
