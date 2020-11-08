import React, { useState } from "react";
import { Layout, ConfigProvider } from "antd";
import i18n from "i18next";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
import PageContent from "./PageContent";
import languages from "../config/languages";
import StyleDirectionContext from "./context/styleDirectionContext";

export default function AppLayout() {
  const [direction, setDirection] = useState();

  i18n.on("initialized", () =>
    setDirection(languages.find(lang => lang.abb === i18n.language).direction)
  );

  return (
    <StyleDirectionContext.Provider
      value={{ StyleDirection: direction, onDirectionChange: setDirection }}
    >
      <ConfigProvider direction={direction}>
        <Layout>
          <Navbar />
          <Layout>
            <SideMenu />
            <PageContent />
          </Layout>
        </Layout>
      </ConfigProvider>
    </StyleDirectionContext.Provider>
  );
}
