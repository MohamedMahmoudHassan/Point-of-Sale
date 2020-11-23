import React from "react";
import { Select } from "antd";

const { Option } = Select;

export default function SelectWithOptions({ data, ...rest }) {
  return (
    <Select {...rest}>
      {data.map(item => (
        <Option key={item.key} value={item.key}>
          {item.text}
        </Option>
      ))}
    </Select>
  );
}
