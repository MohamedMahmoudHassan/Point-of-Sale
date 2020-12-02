import React, { useContext, useEffect, useState } from "react";
import DataContext from "../context/dataContext";
import SelectWithOptions from "../common/SelectWithOptions";
import storesAPI from "../../api/stores";

export default function StoreSelector() {
  const [stores, setStores] = useState([]);
  const { store, setStore } = useContext(DataContext);

  useEffect(() => {
    populateStores();
  }, []);

  const populateStores = async () => {
    const data = await storesAPI.getStores();
    setStores(data);
    const localStorageStore = localStorage.getItem("store");
    if (!localStorageStore || !data.filter(store => store.value === localStorageStore).length)
      localStorage.setItem("store", data[0].value);
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
