import { Basket, DropDown } from '@components/SVGIcons'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setSelected } from 'store/slices/uiSlice'

const ShoppingCartComponent = ({ cartCount, selected}) => {

  const showCartCount = () => {
    if (!cartCount) {
      return `(0)`
    }
    if (cartCount > 9) {
      return(
        <span>
          9<sup>+</sup>
        </span>
      )
    }
    return `(${cartCount})`
  }

  const dispach = useDispatch();
  const onClickButton = () => {
    dispach(setSelected('basket'))
  }

  return (
    <div className='flex flex-row justify-center items-center' onClick={() => onClickButton()}>
      <Basket/>
      <div className='ml-1'>
        <p className='text-lg text-black'>Canasta {showCartCount()}</p>
      </div>
      {selected === 'basket'
          ? <DropDown/>
          : null
        }
    </div>
  )
}

export default ShoppingCartComponent