import React from "react";
import { Menu } from "antd";
import { TagsOutlined } from "@ant-design/icons";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";

const { SubMenu } = Menu;

export default function ItemsSubMenu(props) {
  const history = useHistory();
  const { t } = useTranslation();

  const handleNav = route => {
    history.push(route);
  };

  return (
    <SubMenu key="items" icon={<TagsOutlined />} title={t("items.items")} {...props}>
      <Menu.Item key="itemsList" onClick={() => handleNav("/items")}>
        {t("items.itemsList.itemsList")}
      </Menu.Item>
      <Menu.Item key="categories" onClick={() => handleNav("/items/categories")}>
        {t("items.categoriesList.categoriesList")}
      </Menu.Item>
    </SubMenu>
  );
}
