import React, { useState } from "react";
import { Input } from "antd";
import { useTranslation } from "react-i18next";
import DataForm from "./common/DataForm";
import ImageUpload from "./common/ImageUpload";
import staticAPI from "../api/static";

export default function CategoryForm({ onFinish, ...rest }) {
  const { t } = useTranslation();
  const [fileList, setFileList] = useState([]);

  const handleFinish = async values => {
    const uploadResponse = await staticAPI.postImage(fileList[0]);
    if (uploadResponse.status === 200)
      return await onFinish({ image: uploadResponse.data.imageUrl, ...values });
    return uploadResponse;
  };

  return (
    <DataForm
      {...rest}
      navTo="/items/categories"
      onFinish={handleFinish}
      formItems={[
        {
          label: t("items.categoriesList.name.label"),
          name: "text",
          rules: [{ required: true, message: t("items.categoriesList.name.warning") }],
          Component: Input
        },
        {
          label: "image",
          name: "upload",
          otherProps: {
            valuePropName: "fileList"
          },
          Component: () => <ImageUpload fileList={fileList} setFileList={setFileList} />
        }
      ]}
    />
  );
}
