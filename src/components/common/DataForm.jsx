import React from "react";
import { Form } from "antd";
import FormButtons from "./FormButtons";

export default function DataForm({ title, formItems, onFinish, data }) {
  const layout = { labelCol: { span: 5 } };

  return (
    <Form {...layout} onFinish={onFinish} initialValues={data}>
      <h2>{title}</h2>
      {formItems.map(item => (
        <Form.Item key={item.name} label={item.label} name={item.name} rules={item.rules}>
          <item.Component />
        </Form.Item>
      ))}
      <Form.Item>
        <FormButtons />
      </Form.Item>
    </Form>
  );
}
