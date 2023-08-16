import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Input, Icon, Transition } from 'semantic-ui-react'
import { addProduct } from 'store/slices/dataSlice';

const validate = (quantity) => {
  let error = ''
  if (quantity < 1) error = "Can't be blank"
  return error
}

export const AddToCartComponent = ({ product }) => {
  //Animacion de carga del input
  const [loading, setLoading] = useState(false)
  //Cantidad que cambia cada que se coloca algo en el input
  const [quantity, setQuantity] = useState(1)

  const dispach = useDispatch();


  const [error, setError] = useState('')
  const [visible, setVisible] = useState(false)

  const toggleMessage = () => {
    setTimeout(() => {
      setVisible(false)
    }, 1000)
  }

  const handleSubmit = async () => {
    const error = validate(quantity)
    setError(error)

    if (!error) {
      setLoading(true)
      setTimeout(() => {
        dispach(addProduct({
          product,
          cant: quantity
        }))
        setLoading(false)
      }, 2000);
    }
  }

  //Permite que se cambie el valor del input
  const handleChange = ({ target }) => setQuantity(parseInt(target.value, 10))

  return (
    <div className='my-3'>
      <Input
        type="number"
        placeholder="Quantity"
        value={quantity}
        min={1}
        step={1}
        error={!!error}
        onChange={handleChange}
        action={{
          color: 'green',
          content: 'Add to Cart',
          icon: 'plus cart',
          onClick: handleSubmit,
          loading,
          disabled: loading,
        }}
      />
      {error && (
        <div style={{ color: 'red', position: 'absolute' }}>{error}</div>
      )}
      <Transition duration={{ hide: 500, show: 500 }} visible={visible}>
        <div style={{ color: 'green', position: 'absolute' }}>
          <Icon name="check" />
          Added to cart
        </div>
      </Transition>
    </div>
  )
}

