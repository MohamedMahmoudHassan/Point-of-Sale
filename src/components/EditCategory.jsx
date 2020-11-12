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
    const response = await categoriesAPI.getCategory(match.params.id);
    const data = { label: response.data.label.en };
    setCategory(data);
  };

  const onFinish = async values => {
    values.label = { en: values.label };
    await categoriesAPI.putCategory(match.params.id, values);
    history.push("/items/categories");
  };

  return (
    <div className="form-container">
      {category.label && (
        <div>
          <h2>{category.label}</h2>
          <CategoryForm onFinish={onFinish} data={category} />
        </div>
      )}
    </div>
  );
}
