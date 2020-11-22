import React from "react";
import { Form, message } from "antd";
import FormButtons from "./FormButtons";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function DataForm({ title, formItems, onFinish, navTo, data }) {
  const layout = { labelCol: { span: 5 } };
  const { t } = useTranslation();
  const history = useHistory();

  const handelFinish = async values => {
    message.loading({ content: t("formButtons.saving"), key: "updatable" });
    const response = await onFinish(values);

    if (response.status === 200) {
      message.success({ content: t("formButtons.saveSuccess"), key: "updatable", duration: 2 });
      history.push(navTo);
    } else message.error({ content: response.data, key: "updatable", duration: 2 });
  };

  return (
    <Form {...layout} onFinish={handelFinish} initialValues={data}>
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
