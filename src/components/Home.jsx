import React, { useState } from "react";
import { Button } from "antd";

export default function Home() {
  const [showTestComp, setShowTestComp] = useState(false);

  const test = async () => {
    setShowTestComp(!showTestComp);
  };
  return (
    <div>
      <h1>This is test component</h1>
      <Button type="dashed" onClick={test}>
        Test
      </Button>
    </div>
  );
}
