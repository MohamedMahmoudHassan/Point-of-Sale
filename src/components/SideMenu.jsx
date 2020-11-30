import React, { useContext } from "react";
import { Layout, Menu } from "antd";
import SideMenuCollapseContext from "./context/sideMenuCollapseContext";
import HomeSubMenu from "./HomeSubMenu";
import ItemsSubMenu from "./items/ItemsSubMenu";
import StoresSubMenu from "./stores/storesSubMenu";

const { Sider } = Layout;

export default function SideMenu() {
  const { isCollapsed } = useContext(SideMenuCollapseContext);

  return (
    <Sider
      width={200}
      className="site-layout-background"
      trigger={null}
      collapsible
      collapsed={isCollapsed}
      style={{ backgroundColor: "white" }}
    >
      <Menu mode="inline" defaultSelectedKeys={["1"]} style={{ height: "100%", borderRight: 0 }}>
        <HomeSubMenu />
        <ItemsSubMenu />
        <StoresSubMenu />
      </Menu>
    </Sider>
  );
}
