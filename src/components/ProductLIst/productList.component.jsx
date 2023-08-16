/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@nextui-org/react';
import { useDispatch } from 'react-redux';
import { addProduct } from 'store/slices/dataSlice';
import toast from 'react-hot-toast';

function MediaCard({avocado}) {
  const [iconStarCount, setIconStarCount] = useState([])
  useEffect(() => {
    const newArray = [];
    for (let i = 0; i < parseInt(avocado.score); i++) {
      newArray.push(
        <svg key={i} className="w-4 h-4 text-yellow-300 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
          <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
        </svg>
      );
    }
    if(newArray.length < 5){
      for (let index = newArray.length ; index < 5; index++) {
        newArray.push(
          <svg key={index} className="w-4 h-4 text-gray-200  mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
        );
      }
    }
    setIconStarCount(newArray);
  }, [])

  const dispach = useDispatch();

  const handleClick = () => {
    toast.success( `Producto Agregado 🥑`)

    dispach(addProduct({
      product: avocado,
      cant: 1
    }))
  };

  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow transition-transform duration-300 ease-in-out transform hover:translate-y-[-5px] flex flex-col justify-center items-center ">
      <Link href={`/product/${avocado.id}`} >
        <div className="px-5 pb-5 w-full h-full">
            <Image src={avocado.image} alt={avocado.name} width={300} height={300} priority={true}/>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 ">{avocado.name}</h5>
            <div className="flex items-center mt-2.5 mb-5">
              {iconStarCount}
            </div>
            <span className="text-3xl font-bold text-gray-900 mr-3">${avocado.price}</span>
        </div>
      </Link>
      <Button color="primary" className='absolute bottom-3 right-4 bg-buttonPrimary text-white text-lg' onClick={handleClick}>Add to cart</Button>
    </div>
  )
}


export const ProductListComponent = ({ avocados }) => {
  return (
    <div className='grid mm:grid-cols-1 mm:gap-4 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10 p-4 '>
      {avocados.map((avocado) => (
          <MediaCard key={avocado.id} avocado={avocado} />
      ))}
    </div>
  )
}

