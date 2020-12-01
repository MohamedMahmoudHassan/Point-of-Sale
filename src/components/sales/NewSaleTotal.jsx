import React from "react";
import { Typography } from "antd";
import formatIntAsCurrency from "../../Utils/formatIntAsCurrency";

const { Title } = Typography;

export default function NewSaleTotal({ total }) {
  return <div>{total > 0 && <Title level={3}>Total: {formatIntAsCurrency(total)}</Title>}</div>;
}
