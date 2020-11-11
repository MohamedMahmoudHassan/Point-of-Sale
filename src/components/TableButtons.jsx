import React from "react";
import { Button, Col, Row, Popconfirm } from "antd";
import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import colors from "../config/colors";

export default function TableButtons({ addTitle, newNav, selectedRowsKeys, handleDelete }) {
  const history = useHistory();

  const handleAdd = () => {
    history.push(newNav);
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
          <Popconfirm
            title={"Are you sure you want to delete?"}
            onConfirm={handleDelete}
            okText="Yes"
            cancelText="No"
          >
            <Button shape="round" style={{ color: colors.primary, borderColor: colors.primary }}>
              <DeleteOutlined /> Delete
            </Button>
          </Popconfirm>
        )}
      </Col>
    </Row>
  );
}
