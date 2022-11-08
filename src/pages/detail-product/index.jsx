import { Button } from 'antd'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import api from '../../services/api'

const DetailProduct = () => {
  const [produk, setProduk] = useState({})
  const params = useParams()
  const navigate = useNavigate()

  const fetchProduk = async (id) => {
    try {
      const url = `/api/v1/products/${id}`
      const response = await api.get(url)
      const payload = { ...response.data.data.product }
      console.log(payload)
      setProduk(payload)
    } catch (error) {
      console.log(error);
      alert(error)
    }
  }

  useEffect(() => {
    if (params.id) {
      fetchProduk(params.id)
    }
  }, [params.id])


  return (
    <>
      <div className='text-center'>DetailProduct</div>
      <div>
        <p>Nama Produk : {produk?.name}</p>
      </div>
      <div>
        <p>Harga : {produk?.price}</p>
      </div>
      <div>
        <p>Seller : {produk?.ownerId?.name}</p>
      </div>
      <div className='text-center'>
        <Button type='primary' className='rounded' onClick={() => navigate(-1)}>Kembali</Button>
      </div>
    </>
  )
}

export default DetailProduct