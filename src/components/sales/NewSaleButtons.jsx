import React from "react";
import { Button } from "antd";

export default function NewSaleButtons() {
  return (
    <div>
      <Button type="primary" size="large" style={{ marginBottom: 5, width: 150 }}>
        Make sale
      </Button>
      <Button type="ghost" size="large" style={{ marginBottom: 5, width: 150 }}>
        Cancel
      </Button>
    </div>
  );
}
