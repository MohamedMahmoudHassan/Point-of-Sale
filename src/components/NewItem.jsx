import React from "react";
import { Form, Input, InputNumber, Select } from "antd";
import FormControllers from "./FormControllers";

const { Option } = Select;

export default function NewItem() {
  const layout = { labelCol: { span: 6 } };
  const categories = [{ text: "shirts", value: "shirts" }, { text: "pants", value: "pants" }];

  return (
    <div className="form-container">
      <Form {...layout} name="newItem">
        <Form.Item
          label="Item Name"
          name="itemName"
          rules={[{ required: true, message: "Input valid name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item name="category" label="Category" rules={[{ required: true }]}>
          <Select placeholder="Select a category">
            {categories.map(category => <Option value={category.value}>{category.text}</Option>)}
          </Select>
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[{ required: true, type: "number", min: 0, message: "Input valid price" }]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label="In Stock"
          name="inStock"
          rules={[{ required: true, type: "number", min: 0, message: "Input valid number" }]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item>
          <FormControllers />
        </Form.Item>
      </Form>
    </div>
  );
}
