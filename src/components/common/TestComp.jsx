import React from "react";
import { List, Card } from "antd";

export default function TestComp() {
  const data = [
    {
      title: "Title 1"
    },
    {
      title: "Title 2"
    },
    {
      title: "Title 3"
    },
    {
      title: "Title 4"
    },
    {
      title: "Title 5"
    }
  ];

  return (
    <List
      grid={{ gutter: 16, column: 4 }}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <Card title={item.title}>{item.title}</Card>
        </List.Item>
      )}
    />
  );
}
