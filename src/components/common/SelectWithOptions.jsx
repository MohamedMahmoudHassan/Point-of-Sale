import React from "react";
import { Select } from "antd";

const { Option } = Select;

export default function SelectWithOptions({ data, ...rest }) {
  return (
    <Select defaultActiveFirstOption {...rest}>
      {data.map(item => (
        <Option key={item.text} value={item.value}>
          {item.text}
        </Option>
      ))}
    </Select>
  );
}
