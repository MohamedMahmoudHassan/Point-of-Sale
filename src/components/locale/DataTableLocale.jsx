import React, { useState } from "react";
import i18next from "i18next";
import EmptyComp from "./../common/Empty";

export default function DataTableLocale({ emptyText }) {
  const [language, setLanguage] = useState(i18next.language);

  const locale = {
    en: {
      filterConfirm: "OK",
      filterReset: "Reset",
      filterEmptyText: "No filters",
      triggerDesc: "Sort by descend",
      triggerAsc: "Sort by ascend",
      cancelSort: "Cancel sort"
    },
    ar: {
      filterConfirm: "تم",
      filterReset: "إزالة",
      filterEmptyText: "لا يوجد",
      triggerDesc: "ترتيب تنازلي",
      triggerAsc: "ترتيب تصاعدي",
      cancelSort: "إلغاء الترتيب"
    }
  };

  i18next.on("languageChanged", lng => setLanguage(lng));

  return { ...locale[language], emptyText: <EmptyComp description={emptyText} /> };
}
