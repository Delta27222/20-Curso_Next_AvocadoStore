import { Button, Divider } from '@nextui-org/react'
import React from 'react'
import Maluma from '../../../public/maluma.jpg'
import Image from 'next/image'
import CloseX from '@components/SVGIcons/Close';
import Link from 'next/link';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from 'store/slices/dataSlice';

const CardProductSelected = ({ item }) => {
  const avocado = item.product


  const dispach = useDispatch();
  const onClickButton = () => {
    dispach(deleteProduct(avocado.id))
  }

  return (
    <div className='w-full flex justify-center items-center mm:flex-col sm:flex-row m-2'>
        <Image src={Maluma} priority={true} alt='avocados' className='mm:w-[55%] sm:w-[150px]'/>
        <div className='flex flex-row justify-between items-center w-full'>
          <div className='w-full'>
            <Link href={`/product/2zd33b8c`}>
              <h3>{avocado.name}</h3>
            </Link>
            <p>{item.cant} X {avocado.price}</p>
            <p>{avocado.attributes.taste}</p>
          </div>
          <Button isIconOnly className='bg-transparent border-1 rounded-[5px]' onClick={onClickButton}>
            <CloseX />
          </Button>
        </div>
    </div>
  )
}


const CartComponent = () => {
  const products = useSelector(state => state.data.avocadosCart,shallowEqual);

  const totalPrice = products.reduce((total, item) => total + (item.product.price * item.cant), 0);
  const handleClick = () => {
    console.log('Botón clickeado');
  };

  return (
    <section className='flex flex-col justify-center items-center'>
      {products.length === 0
        ? <div className='min-w-[300px] w-[60%] flex flex-col justify-center items-start shadow-sm m-5 p-5 bg-dimCartEmpty border-1 border-dimCartEmptyBorder rounded-[5px]'>
            <h3>Your cart is empty</h3>
            <p>You will nedd to add some items to the cart before you can checkout</p>
          </div>
        : <div className='min-w-[300px] w-[60%]'>
            {products.map((product, index) => (
              <div className='w-full' key={index}>
                <CardProductSelected  item={product}/>
                <Divider className='w-full'/>
              </div>
              ))}
          </div>
      }
      <div className='h-[70px] min-w-[300px] w-[60%] flex flex-row justify-between items-center shadow-sm m-5 p-5 border-1  rounded-[5px]'>
        <p className='m-0'>Sub total: {totalPrice.toFixed(2)}</p>
        <Button  className='rounded-[5px] w-36 bg-black font-bold text-white text-lg' onClick={handleClick}>Check out</Button>
      </div>
    </section>
  )
}

export default CartComponent