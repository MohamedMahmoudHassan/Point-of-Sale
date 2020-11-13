import React, { useState, useEffect } from "react";
import { Table } from "antd";
import addKey from "../../utils/addKey";
import TableButtons from "./TableButtons";

export default function DataTable({ newButtonTitle, columns, getData, deleteData, navTo }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRowsKeys, setSelectedRowsKeys] = useState([]);

  useEffect(() => {
    populateData();
  }, []);

  const populateData = async () => {
    const data = await getData();
    setData(data);
    setLoading(false);
  };

  const handleDelete = async () => {
    await deleteData(selectedRowsKeys);

    const newData = data.filter(item => selectedRowsKeys.indexOf(item.key) === -1);
    setData(newData);
    setSelectedRowsKeys([]);
  };

  return (
    <div>
      <TableButtons
        newTitle={newButtonTitle}
        selectedRowsKeys={selectedRowsKeys}
        navTo={navTo}
        handleDelete={handleDelete}
      />
      <Table
        columns={columns}
        dataSource={data}
        loading={loading}
        rowSelection={{
          type: "checkbox",
          onChange: selectedRowKeys => setSelectedRowsKeys(selectedRowKeys)
        }}
      />
    </div>
  );
}
