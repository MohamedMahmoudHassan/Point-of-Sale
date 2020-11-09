import React from "react";
import { Menu } from "antd";
import { ShopOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";

const { SubMenu } = Menu;

export default function ItemsSubMenu(props) {
  const { t } = useTranslation();

  return (
    <SubMenu key="items" icon={<ShopOutlined />} title={t("items.items")} {...props}>
      <Menu.Item key="itemsList">{t("items.itemsList.itemsList")}</Menu.Item>
      <Menu.Item key="categories">{t("items.categoriesList.categoriesList")}</Menu.Item>
    </SubMenu>
  );
}
