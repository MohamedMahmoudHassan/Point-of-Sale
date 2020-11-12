import React from "react";
import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import FormButtons from "./FormButtons";
import categoriesAPI from "../api/categories";

export default function NewCategory() {
  const history = useHistory();
  const { t } = useTranslation();

  const onFinish = async values => {
    values.label = { en: values.label };
    await categoriesAPI.postCategory(values);
    history.push("/items/categories");
  };

  return (
    <div className="form-container">
      <Form name="newCategory" onFinish={onFinish}>
        <h2>{t("items.categoriesList.addCategory")}</h2>
        <Form.Item
          label={t("items.categoriesList.name")}
          name="label"
          rules={[{ required: true, message: "Input valid category name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <FormButtons />
        </Form.Item>
      </Form>
    </div>
  );
}
