import Image from 'next/image'
import React from 'react'
import { AddToCartComponent } from './addToCart.component'
import { useFunctions } from 'hooks/useFunctions';
import { Divider, Spinner } from '@nextui-org/react';
import { ProductInfoComponent } from './productInfo.component';
import { shallowEqual, useSelector } from 'react-redux';

export const ProductSummaryComponent = ({ avocado }) => {
  const {
    loadingAll,
    loading,
  } = useFunctions();

  //Mostramos un Spinner de carga
  loadingAll();
  
  //Por alguna razon da un error en consola cuando uso este loading de mi store
  // const loadings = useSelector(state => state.ui.loading,shallowEqual);  


  return (
    <section className='flex flex-col justify-center items-center'>
      {!loading
        ? <div className='flex flex-col justify-center items-center max-w-[60%]'>
            <div className='flex sm:flex-row flex-col justify-center items-center my-10'>
              <Image src={avocado.image} alt={avocado.name} width={250} height={250} priority={true}/>
              <div className='ml-10 flex flex-col items-star justify-between'>
                <h5 className="text-[20px] font-semibold tracking-tight text-gray-900 ">{avocado.name}</h5>
                <div className='flex flex-col'>
                  <span className="text-[16px] font-normal text-gray-900 mr-3">{avocado.price} $</span>
                  <span className='w-fit text-[12px] px-3 rounded-[3px] bg-gray-300'>SKU: {avocado.sku}</span>
                </div>
                  <AddToCartComponent product={avocado}/>
              </div>
            </div>
            <Divider className="mb-4" />
            <div>
              <ProductInfoComponent {...avocado.attributes}/>
            </div>
          </div>
        : <div className='h-[450px] flex justify-center'>
            <Spinner label="Loading..." color="primary" size='lg'/>
          </div>
      }
    </section>
  )
}

ProductSummaryComponent