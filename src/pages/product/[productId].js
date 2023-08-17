/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { ProductSummaryComponent } from '@components/index';

export const getStaticPaths = async () => {
  const response = await fetch('https://avocado-store-27222.vercel.app/api/avo');
  const { data:productList } = await response.json();

  const paths = productList.map(({ id }) => ({
    params: {
      productId: id,
    },
  }))

  return {
    paths,
    fallback: false     //Cualquier pagina que no se especifique da un error 404
  }
}


export const getStaticProps = async ({ params }) => {
  const id = params?.productId
  const response = await fetch(`https://avocado-store-27222.vercel.app/api/avo/${id}`);
  const product  = await response.json();
  return {
    props: {
      product
    }
  }
}

const ProductPage = ({ product }) => {

  return (
    <section className='m-10'>
      <ProductSummaryComponent avocado={product}  />
    </section>
  )
}

export default ProductPage