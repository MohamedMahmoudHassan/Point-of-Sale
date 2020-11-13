import React, { useEffect, useState } from "react";
import CategoryForm from "./CategoryForm";
import categoriesAPI from "../api/categories";
import { useHistory } from "react-router-dom";

export default function EditCategory({ match }) {
  const history = useHistory();
  const [category, setCategory] = useState({});

  useEffect(() => {
    populateCategory();
  }, []);

  const populateCategory = async () => {
    const data = await categoriesAPI.getCategory(match.params.id);
    setCategory(data);
  };

  const onFinish = async values => {
    await categoriesAPI.putCategory(match.params.id, values);
    history.push("/items/categories");
  };

  return (
    <div className="form-container">
      {category.name && <CategoryForm title={category.name} onFinish={onFinish} data={category} />}
    </div>
  );
}
