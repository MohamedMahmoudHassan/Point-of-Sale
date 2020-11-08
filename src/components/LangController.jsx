import React, { useContext } from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import StyleDirectionContext from "./context/styleDirectionContext";

export default function LangController() {
  const { i18n } = useTranslation();
  const { onDirectionChange } = useContext(StyleDirectionContext);

  const onLangChange = lang => {
    i18n.changeLanguage(lang);
    onDirectionChange(lang === "ar" ? "rtl" : "ltl");
  };

  return (
    <div>
      <Button type="primary" onClick={() => onLangChange("en")}>
        English
      </Button>
      <Button type="primary" onClick={() => onLangChange("ar")}>
        عربي
      </Button>
    </div>
  );
}
