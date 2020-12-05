import React from "react";
import { Empty } from "antd";
import { useTranslation } from "react-i18next";

export default function EmptyComp() {
  const { t } = useTranslation();

  return <Empty description={t("empty.noData")} />;
}
