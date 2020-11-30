import React from "react";
import StoreForm from "./StoreForm";
import StoresAPI from "../../api/stores";

export default function EditStore({ match }) {
  const getData = async () => await StoresAPI.getStore(match.params.id);

  const onFinish = async values => await StoresAPI.putStore(match.params.id, values);

  return <StoreForm onFinish={onFinish} getData={getData} />;
}
