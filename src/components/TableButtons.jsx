import React from "react";
import { Button, Col, Row, Popconfirm, message } from "antd";
import { PlusCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import colors from "../config/colors";
import { useTranslation } from "react-i18next";

export default function TableButtons({ addTitle, newNav, selectedRowsKeys, handleDelete }) {
  const history = useHistory();
  const { t } = useTranslation();

  const handleAdd = () => {
    history.push(newNav);
  };

  const onDelete = async () => {
    message.loading({ content: t("tableButtons.deleting"), key: "updatable" });
    await handleDelete();
    message.success({ content: t("tableButtons.deleteSuccess"), key: "updatable", duration: 2 });
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
            title={t("tableButtons.deleteConfirm")}
            onConfirm={onDelete}
            okText={t("tableButtons.ok")}
            cancelText={t("tableButtons.cancel")}
          >
            <Button shape="round" style={{ color: colors.primary, borderColor: colors.primary }}>
              <DeleteOutlined /> {t("tableButtons.delete")}
            </Button>
          </Popconfirm>
        )}
      </Col>
    </Row>
  );
}
