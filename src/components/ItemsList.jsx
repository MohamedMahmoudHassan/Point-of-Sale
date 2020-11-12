// import React from "react";
// import { Table } from "antd";
// import { useTranslation } from "react-i18next";
// import TableButtons from "./TableButtons";

// export default function ItemsList() {
//   const { t } = useTranslation();

//   const columns = [
//     {
//       title: t("items.itemsList.name"),
//       dataIndex: "name",
//       sorter: { compare: (a, b) => (a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1) }
//     },
//     {
//       title: t("items.itemsList.category"),
//       dataIndex: "category",
//       filters: [{ text: "shirts", value: "shirts" }, { text: "pants", value: "pants" }],
//       onFilter: (value, record) => record.category === value
//     },
//     {
//       title: t("items.itemsList.price"),
//       dataIndex: "price",
//       sorter: { compare: (a, b) => a.price - b.price }
//     },
//     {
//       title: t("items.itemsList.inStock"),
//       dataIndex: "inStock",
//       sorter: { compare: (a, b) => a.inStock - b.inStock }
//     }
//   ];

//   const data = [
//     {
//       key: "1",
//       name: "Red Basic",
//       category: "shirts",
//       price: 100,
//       inStock: 20
//     },
//     {
//       key: "2",
//       name: "black slim",
//       category: "pants",
//       price: 200,
//       inStock: 10
//     },
//     {
//       key: "3",
//       name: "Green Basic",
//       category: "shirts",
//       price: 100,
//       inStock: 22
//     }
//   ];

//   return (
//     <div>
//       <TableButtons
//         addTitle={t("items.itemsList.addItem")}
//         newNav="items/new"
//         selectedRowsKeys={[]}
//       />
//       <Table columns={columns} dataSource={data} />
//     </div>
//   );
// }
