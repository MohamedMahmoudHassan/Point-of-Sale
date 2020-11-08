import React from "react";
import { Layout, Menu } from "antd";
import { useTranslation } from "react-i18next";
import {
  ShopOutlined,
  LaptopOutlined,
  NotificationOutlined,
  AlertOutlined
} from "@ant-design/icons";

const { SubMenu } = Menu;
const { Sider } = Layout;

export default function SideMenu() {
  const { t } = useTranslation();

  return (
    <Sider width={200} className="site-layout-background">
      <Menu mode="inline" defaultSelectedKeys={["1"]} style={{ height: "100%", borderRight: 0 }}>
        <SubMenu key="items" icon={<ShopOutlined />} title={t("items.items")}>
          <Menu.Item key="itemsList">{t("items.itemsList.itemsList")}</Menu.Item>
          <Menu.Item key="categories">{t("items.categoriesList.categoriesList")}</Menu.Item>
        </SubMenu>

        <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
          <Menu.Item key="5">option5</Menu.Item>
          <Menu.Item key="6">option6</Menu.Item>
          <Menu.Item key="7">option7</Menu.Item>
          <Menu.Item key="8">option8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
          <Menu.Item key="9">option9</Menu.Item>
          <Menu.Item key="10">option10</Menu.Item>
          <Menu.Item key="11">option11</Menu.Item>
          <Menu.Item key="12">option12</Menu.Item>
        </SubMenu>
        <SubMenu key="sub4" icon={<AlertOutlined />} title="subnav 4">
          <Menu.Item key="13">option13</Menu.Item>
          <Menu.Item key="14">option14</Menu.Item>
          <Menu.Item key="15">option15</Menu.Item>
          <Menu.Item key="16">option16</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
}
