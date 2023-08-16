/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { ProductSummaryComponent } from '@components/index';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { setLoading } from 'store/slices/uiSlice';
import { fetchOneAvocado } from 'store/slices/dataSlice';

const ProductPage = () => {
  const [avocado, setAvocado] = useState([]);
  const router = useRouter()
  const id = router.query.productId

  const dispatch = useDispatch()
  useEffect(() => {
    if(id) {
      dispatch(setLoading(true))
      fetch(`/api/avo/${id}`)
      .then(res => res.json())
      .then(data => setAvocado(data))
      setTimeout(() => {
        dispatch(setLoading(false))
      }, 3000);
    }
  }, [])

  return (
    <section className='m-10'>
      <ProductSummaryComponent avocado={avocado}  />
    </section>
  )
}

export default ProductPage