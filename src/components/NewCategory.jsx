import React from "react";
import { Form, Input } from "antd";
import FormControllers from "./FormControllers";

export default function NewCategory() {
  return (
    <div className="form-container">
      <Form name="newCategory">
        <Form.Item
          label="Category Name"
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
