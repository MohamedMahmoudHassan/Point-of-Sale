import React from "react";
import { Menu } from "antd";
import { ShopOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const { SubMenu } = Menu;

export default function StoresSubMenu(props) {
  const history = useHistory();
  const { t } = useTranslation();

  const handleNav = route => {
    history.push(route);
  };

  return (
    <SubMenu key="items" icon={<ShopOutlined />} title={t("stores.stores")} {...props}>
      <Menu.Item key="storesList" onClick={() => handleNav("/stores")}>
        {t("stores.storesList.storesList")}
      </Menu.Item>
    </SubMenu>
  );
}
