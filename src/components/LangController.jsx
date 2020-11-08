import React, { useContext } from "react";
import { Button } from "antd";
import { useTranslation } from "react-i18next";
import StyleDirectionContext from "./context/styleDirectionContext";
import languages from "../config/languages";

export default function LangController() {
  const { i18n } = useTranslation();
  const { onDirectionChange } = useContext(StyleDirectionContext);

  const onLangChange = (lang, dir) => {
    i18n.changeLanguage(lang);
    onDirectionChange(dir);
  };

  return (
    <div>
      {languages.map(
        lang =>
          i18n.language !== lang.abb && (
            <Button
              key={lang.abb}
              type="primary"
              onClick={() => onLangChange(lang.abb, lang.direction)}
            >
              {lang.label}
            </Button>
          )
      )}
    </div>
  );
}
