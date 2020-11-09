import React from "react";
import { Layout, Menu } from "antd";
import ItemsSubMenu from "./ItemsSubMenu";
import HomeSubMenu from "./HomeSubMenu";

const { Sider } = Layout;

export default function SideMenu() {
  return (
    <Sider width={200} className="site-layout-background">
      <Menu mode="inline" defaultSelectedKeys={["1"]} style={{ height: "100%", borderRight: 0 }}>
        <HomeSubMenu />
        <ItemsSubMenu />
      </Menu>
    </Sider>
  );
}
