import React, { useState } from "react";

//Vamos a hacer uso de un customHook

export function useFunctions() {
  // Estado de productos
  const [productLIst, setProductLIst] = useState([]);

  // Estado de carga
  const [loading, setLoading] = useState(true);

  //Estado de Navbar seleccionado
  const [selected, setSelected] = useState('none')

  const navBarSelected = (select) => {
    setSelected(select);
  }

  const loadingAll = () => {
    setTimeout(() => {
    try {
      setLoading(false);
    } catch (error) {
      setError(error);
    }
    }, 1000);
  }
  const fetchAvocados = () => {
    fetch('/api/avo')
      .then(res => res.json())
      .then(data => setProductLIst(data.data))
  }
  return {
    fetchAvocados,
    productLIst,
    setProductLIst,
    loadingAll,
    loading,
    selected,
    navBarSelected
  }
}