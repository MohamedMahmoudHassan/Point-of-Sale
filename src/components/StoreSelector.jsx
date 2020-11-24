import React, { useEffect, useState } from "react";
import SelectWithOptions from "./common/SelectWithOptions";
import storesAPI from "../api/stores";

export default function StoreSelector() {
  const [stores, setStores] = useState([]);

  useEffect(() => {
    populateStores();
  }, []);

  const populateStores = async () => {
    const data = await storesAPI.getStores();
    setStores(data);
    if (!localStorage.getItem("store")) localStorage.setItem("store", data[0].value);
  };

  return (
    localStorage.getItem("store") && (
      <SelectWithOptions
        onChange={value => {
          localStorage.setItem("store", value);
          window.location.reload();
        }}
        style={{ width: "150px" }}
        defaultValue={localStorage.getItem("store")}
        data={stores}
      />
    )
  );
}
