/* eslint-disable react-hooks/exhaustive-deps */
import { Avocado } from '@components/SVGIcons';
import React, { useEffect, useState } from 'react'
import { ProductListComponent } from '@components/index';
import { Spinner } from '@nextui-org/react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchAvocadosWithDetails, setAvocados } from 'store/slices/dataSlice';
import { setLoading } from 'store/slices/uiSlice';
import { Toaster } from 'react-hot-toast';


export const getStaticProps = async (params) => {
  const response = await fetch('https://avocado-store-27222.vercel.app/api/avo');
  const { data: productList } = await response.json();
  return {
    props: {
      productList
    }
  }
}

const Home = ({ productList }) => {
  const dispatch = useDispatch()
  const loading = useSelector(state => state.ui.loading,shallowEqual);
  const avocados = useSelector(state => state.data.avocados,shallowEqual);
  useEffect(() => { // Siempre se ejecuta en el navegador (Client Side Rendering)
    dispatch(setLoading(true))
    dispatch(setAvocados(productList))
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 1000);
  },[])
  return (
    <div className='mx-10 flex flex-col justify-center items-center'>
      <div className='flex flex-col'>
        <h1 className='flex justify-center items-center font-bold text-2xl my-4'>Avocado <Avocado/> Store</h1>
        <p className='mb-4 text-blue-400'>Should I eat an avocado today?</p>
      </div>
      <Toaster/>
      {!loading
        ? <ProductListComponent avocados={avocados}/> 
        : <div className='h-[450px] flex justify-center'>
            <Spinner label="Loading..." color="primary" size='lg'/>
          </div>
        }
    </div>
  )
}

export default Home
