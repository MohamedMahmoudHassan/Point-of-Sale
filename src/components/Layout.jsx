import React, { useState } from "react";
import { Layout, ConfigProvider } from "antd";
import i18n from "i18next";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import PageContent from "./PageContent";
import languages from "../config/languages";
import StyleDirectionContext from "./context/styleDirectionContext";
import SideMenuCollapseContext from "./context/sideMenuCollapseContext";

export default function AppLayout() {
  const [direction, setDirection] = useState();
  const [isCollapsed, toggleCollapse] = useState(false);

  i18n.on("initialized", () =>
    setDirection(languages.find(lang => lang.abb === i18n.language).direction)
  );

  return (
    <StyleDirectionContext.Provider
      value={{ StyleDirection: direction, onDirectionChange: setDirection }}
    >
      <SideMenuCollapseContext.Provider value={{ isCollapsed, onToggleCollapse: toggleCollapse }}>
        <ConfigProvider direction={direction}>
          <Layout>
            <Navbar />
            <Layout>
              <SideMenu />
              <PageContent />
            </Layout>
          </Layout>
        </ConfigProvider>
      </SideMenuCollapseContext.Provider>
    </StyleDirectionContext.Provider>
  );
}
