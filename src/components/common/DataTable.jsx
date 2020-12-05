import React, { useState, useEffect } from "react";
import { Table } from "antd";
import TableButtons from "./TableButtons";
import { useHistory } from "react-router-dom";
import DataTableLocale from "../locale/DataTableLocale";

export default function DataTable({
  newButtonTitle,
  columns,
  getData,
  deleteData,
  navTo,
  clickable,
  withSelection,
  withButtons,
  emptyText
}) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedRowsKeys, setSelectedRowsKeys] = useState([]);
  const history = useHistory();

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
      {withButtons && (
        <TableButtons
          newTitle={newButtonTitle}
          selectedRowsKeys={selectedRowsKeys}
          navTo={navTo}
          handleDelete={handleDelete}
        />
      )}
      <Table
        rowClassName={clickable && "tableRow"}
        columns={columns}
        dataSource={data}
        loading={loading}
        locale={DataTableLocale({ emptyText })}
        rowSelection={
          withSelection && {
            type: "checkbox",
            onChange: selectedRowKeys => setSelectedRowsKeys(selectedRowKeys)
          }
        }
        onRow={record => clickable && { onClick: () => history.push(`${navTo}/${record.key}`) }}
      />
    </div>
  );
}
