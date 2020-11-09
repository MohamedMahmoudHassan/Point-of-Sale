import React from "react";
import { Layout, Menu } from "antd";
import { LaptopOutlined, NotificationOutlined, AlertOutlined } from "@ant-design/icons";
import ItemsSubMenu from "./ItemsSubMenu";

const { SubMenu } = Menu;
const { Sider } = Layout;

export default function SideMenu() {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu mode="inline" defaultSelectedKeys={["1"]} style={{ height: "100%", borderRight: 0 }}>
        <ItemsSubMenu />
      </Menu>
    </Sider>
  );
}
