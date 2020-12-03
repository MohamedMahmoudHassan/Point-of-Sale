import React from "react";
import { Menu } from "antd";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const { SubMenu } = Menu;

export default function SalesSubMenu(props) {
  const history = useHistory();
  const { t } = useTranslation();

  const handleNav = route => {
    history.push(route);
  };

  return (
    <SubMenu key="items" icon={<ShoppingCartOutlined />} title={t("sales.sales")} {...props}>
      <Menu.Item key="newSale" onClick={() => handleNav("/sales/new")}>
        {t("sales.newSale")}
      </Menu.Item>
      <Menu.Item key="salesList" onClick={() => handleNav("/sales")}>
        {t("sales.salesList")}
      </Menu.Item>
    </SubMenu>
  );
}
