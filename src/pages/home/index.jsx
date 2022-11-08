import React, { useEffect, useState } from "react";
import { Banner, ProductCard } from "@components";
import api from "../../services/api";


const HomePage = () => {

  const [kota, setKota] = useState([])
  const fetchKota = async () => {
    try {
      const url = '/api/v1/city'
      const response = await api.get(url)
      const payload = [...response.data.data.cities]
      console.log(payload)
      setKota(payload)
    } catch (error) {
      alert(error)
    }
  }

  const [produk, setproduk] = useState([])
  const fetchProduk = async () => {
    try {
      const url = '/api/v1/products'
      const response = await api.get(url)
      const payload = [...response.data.data.products]
      console.log(payload)
      setproduk(payload)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchKota();
    fetchProduk();
  }, [])


  return (
    <>
      <Banner />
      <h2 className="text-center">Kota</h2>
      <div className="bg-primary text-white rounded grid grid-cols-5 gap-4 m-5">
        {
          kota.map((item) => {
            return <span key={item.id}>{item.name}</span>
          })
        }
      </div>
      <div className="grid grid-cols-4 gap-10 mt-5 m-5">
      {
        produk.map((item) => {
          return (
              <ProductCard
                key={item?.id}
                random={Math.random}
                productName={item?.name}
                productCategory={item?.category}
                productPrice={item?.price}
                onClick={item?.id}
              />
          )
        })
      }
      </div>
    </>
  );
};

export default HomePage;
