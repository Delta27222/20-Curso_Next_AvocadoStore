/* eslint-disable react-hooks/exhaustive-deps */
import { Avocado } from '@components/SVGIcons';
import React, { useEffect, useState } from 'react'
import { ProductListComponent } from '@components/index';
import { Spinner } from '@nextui-org/react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { fetchAvocadosWithDetails } from 'store/slices/dataSlice';
import { setLoading } from 'store/slices/uiSlice';
import { Toaster } from 'react-hot-toast';

const Home = () => {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLoading(true))
    dispatch(fetchAvocadosWithDetails())
    setTimeout(() => {
      dispatch(setLoading(false))
    }, 3000);
  },[])
  const avocados = useSelector(state => state.data.avocados,shallowEqual);
  const loading = useSelector(state => state.ui.loading,shallowEqual);

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
