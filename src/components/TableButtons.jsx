import React from "react";
import { Button, Col, Row } from "antd";
import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import colors from "../config/colors";

export default function TableButtons({ addTitle, newNav, selectedRowsKeys }) {
  const history = useHistory();

  const handleAdd = () => {
    history.push(newNav);
  };

  const handleDelete = () => {
    console.log(selectedRowsKeys.length);
  };

  return (
    <Row>
      <Col>
        <Button type="primary" shape="round" style={{ marginBottom: "18px" }} onClick={handleAdd}>
          <PlusCircleOutlined /> {addTitle}
        </Button>
      </Col>
      <Col flex="8px" />
      <Col>
        {selectedRowsKeys.length > 0 && (
          <Button
            shape="round"
            style={{ color: colors.primary, borderColor: colors.primary }}
            onClick={handleDelete}
          >
            <DeleteOutlined /> Delete
          </Button>
        )}
      </Col>
    </Row>
  );
}
