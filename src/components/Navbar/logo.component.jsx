import React from 'react'
import { Avocado, DropDown } from '@components/SVGIcons'
import { useDispatch } from 'react-redux';
import { setSelected } from 'store/slices/uiSlice';

const LogoComponent = ({ selected }) => {
  const dispach = useDispatch();
  const onClickButton = () => {
    dispach(setSelected('logo'))
  }
  return (
    <div className={`flex flex-row justify-center items-center text-bold text-black ${selected === 'logo' ? '' : null}`} onClick={() => onClickButton()} >
      <Avocado/>
      Avo Store
        {selected === 'logo'
          ? <DropDown/>
          : null
        }
    </div>
  )
}

export default LogoComponent