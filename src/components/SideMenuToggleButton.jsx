import React, { useContext } from "react";
import { Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import SideMenuCollapseContext from "./context/sideMenuCollapseContext";

export default function SideMenuToggleButton() {
  const { isCollapsed, onToggleCollapse } = useContext(SideMenuCollapseContext);

  const toggleCollapse = () => {
    onToggleCollapse(!isCollapsed);
  };

  return (
    <Button
      type="link"
      icon={<MenuOutlined style={{ color: "white", fontSize: 20 }} onClick={toggleCollapse} />}
    />
  );
}
