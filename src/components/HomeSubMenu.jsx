import React from "react";
import { Menu } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

export default function HomeSubMenu(props) {
  const history = useHistory();
  const { t } = useTranslation();

  const handleNav = route => {
    history.push(route);
  };

  return (
    <Menu.Item {...props} key="home" icon={<HomeOutlined />} onClick={() => handleNav("/")}>
      {t("home")}
    </Menu.Item>
  );
}
