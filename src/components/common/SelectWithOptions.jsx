import React from "react";
import { Select } from "antd";

const { Option } = Select;

export default function SelectWithOptions({ data }) {
  return (
    <Select defaultActiveFirstOption>
      {data.map(item => <Option value={item.value}>{item.text}</Option>)}
    </Select>
  );
}
