import React from "react";
import { Form, Input } from "antd";
import { useTranslation } from "react-i18next";
import FormButtons from "./FormButtons";

export default function CategoryForm({ data, onFinish }) {
  const { t } = useTranslation();

  return (
    <Form name="newCategory" onFinish={onFinish} initialValues={data}>
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
  );
}
