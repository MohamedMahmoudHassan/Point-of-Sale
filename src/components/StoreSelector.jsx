import React, { useContext, useEffect, useState } from "react";
import SelectWithOptions from "./common/SelectWithOptions";
import storesAPI from "../api/stores";
import DataContext from "./context/dataContext";

export default function StoreSelector() {
  const [stores, setStores] = useState([]);
  const { store, setStore } = useContext(DataContext);

  useEffect(() => {
    populateStores();
  }, []);

  const populateStores = async () => {
    const data = await storesAPI.getStores();
    setStores(data);
    if (!localStorage.getItem("store")) localStorage.setItem("store", data[0].value);
    setStore(localStorage.getItem("store"));
  };

  return (
    <div>
      {store && (
        <SelectWithOptions
          onChange={value => {
            setStore(value);
            localStorage.setItem("store", value);
            window.location.reload();
          }}
          style={{ width: "150px" }}
          defaultValue={store}
          data={stores}
        />
      )}
    </div>
  );
}
