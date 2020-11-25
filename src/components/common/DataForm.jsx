import React, { useEffect, useState } from "react";
import { Form, message } from "antd";
import _ from "lodash";
import FormButtons from "./FormButtons";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

export default function DataForm({ title, formItems, onFinish, navTo, getData }) {
  const [form] = Form.useForm();
  const [data, setData] = useState({});
  const { t } = useTranslation();
  const history = useHistory();
  const layout = { labelCol: { span: 5 } };

  useEffect(() => {
    populateData();
  }, []);

  const populateData = async () => {
    const data = await getData();
    setData(data);
    form.setFieldsValue(data);
  };

  const handelFinish = async values => {
    message.loading({ content: t("formButtons.saving"), key: "updatable" });
    const response = await onFinish(values);

    if (response.status === 200) {
      message.success({ content: t("formButtons.saveSuccess"), key: "updatable", duration: 2 });
      history.push(navTo);
    } else message.error({ content: response.data, key: "updatable", duration: 2 });
  };

  return (
    <div className="form-container">
      <Form {...layout} onFinish={handelFinish} form={form}>
        <h2>{data.text || title}</h2>
        {formItems.map(item => (
          <Form.Item key={item.name} {..._.pick(item, ["name", "label", "rules"])}>
            <item.Component />
          </Form.Item>
        ))}
        <Form.Item>
          <FormButtons />
        </Form.Item>
      </Form>
    </div>
  );
}
