import { Button } from "antd";
import React from "react";
import { PlusCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

export default function AddButton({ title, to }) {
  const history = useHistory();

  const handleClick = () => {
    history.push(to);
  };
  return (
    <Button type="primary" shape="round" style={{ marginBottom: "18px" }} onClick={handleClick}>
      <PlusCircleOutlined />
      Add {title}
    </Button>
  );
}
