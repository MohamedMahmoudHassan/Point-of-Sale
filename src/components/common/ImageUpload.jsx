import React, { useState } from "react";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import api from "../../config/api";
import { useTranslation } from "react-i18next";

export default function ImageUpload(props) {
  const { t } = useTranslation();

  const getBase64 = file => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  };

  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [previewTitle, setPreviewTitle] = useState("");

  const onCancel = () => setPreviewVisible(false);

  const onPreview = async file => {
    if (!file.url && !file.preview) file.preview = await getBase64(file.originFileObj);

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf("/") + 1));
  };

  const uploadButton = (
    <div>
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>{t("formButtons.upload")}</div>
    </div>
  );

  return (
    <>
      <Upload
        name="image"
        action={api.apiHostStatic}
        listType="picture-card"
        onPreview={onPreview}
        {...props}
      >
        {props.fileList && props.fileList.length >= 1 ? null : uploadButton}
      </Upload>
      <Modal visible={previewVisible} title={previewTitle} footer={null} onCancel={onCancel}>
        <img alt="example" style={{ width: "100%" }} src={previewImage} />
      </Modal>
    </>
  );
}
