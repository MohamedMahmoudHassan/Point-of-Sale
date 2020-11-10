import React from "react";
import { Form, Input } from "antd";
import FormControllers from "./FormControllers";
import { useTranslation } from "react-i18next";

export default function NewCategory() {
  const { t } = useTranslation();

  return (
    <div className="form-container">
      <Form name="newCategory">
        <h2>{t("items.categoriesList.addCategory")}</h2>
        <Form.Item
          label={t("items.categoriesList.name")}
          name="categoryName"
          rules={[{ required: true, message: "Input valid category name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <FormControllers />
        </Form.Item>
      </Form>
    </div>
  );
}
