import { useState, createContext, useContext, useEffect } from "react";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [data, setStoreData] = useState({ loading: true });
  const setData = (new_data) => {
    let data = data || {};
    new_data = new_data || {};
    data = { ...data, ...new_data, ...{ loading: false } };
    setStoreData(data);
  };

  return (
    <StoreContext.Provider value={{ data, setData }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);

export const processStore = (
  prev_data,
  new_data,
  fields,
  update_all = false
) => {
  let status = false,
    data = {};
  (fields || []).map((f) => {
    console.log("-----", f, prev_data[f]);
    if (!prev_data[f] || update_all) {
      data[f] = new_data[f];
      status = true;
    }
  });
  return { status, data };
};
