import React from "react";
import { Form, Input, InputNumber, Select } from "antd";
import FormButtons from "./FormButtons";
import { useTranslation } from "react-i18next";

const { Option } = Select;

export default function NewItem() {
  const { t } = useTranslation();
  const layout = { labelCol: { span: 5 } };
  const categories = [{ text: "shirts", value: "shirts" }, { text: "pants", value: "pants" }];

  return (
    <div className="form-container">
      <Form {...layout} name="newItem">
        <h2>{t("items.itemsList.addItem")}</h2>
        <Form.Item
          label={t("items.itemsList.name")}
          name="itemName"
          rules={[{ required: true, message: "Input valid name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="category"
          label={t("items.itemsList.category")}
          rules={[{ required: true }]}
        >
          <Select defaultActiveFirstOption>
            {categories.map(category => <Option value={category.value}>{category.text}</Option>)}
          </Select>
        </Form.Item>

        <Form.Item
          label={t("items.itemsList.price")}
          name="price"
          rules={[{ required: true, type: "number", min: 0, message: "Input valid price" }]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item
          label={t("items.itemsList.inStock")}
          name="inStock"
          rules={[{ required: true, type: "number", min: 0, message: "Input valid number" }]}
        >
          <InputNumber min={0} />
        </Form.Item>

        <Form.Item>
          <FormButtons />
        </Form.Item>
      </Form>
    </div>
  );
}
