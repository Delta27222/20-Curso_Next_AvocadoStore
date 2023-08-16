import React from 'react'
import { SVGIconProps } from './svg.types'

const DropDown = ({ size = '10px' }: SVGIconProps) => (
  <svg width={size} height={size} viewBox="0 0 51 28" fill="none" xmlns="http://www.w3.org/2000/svg" className='absolute top-[62px] r-[10px]'>
    <path d="M49 1.5H2L24.7579 25.5L49 1.5Z" fill="#EFEFEF" stroke="#EFEFEF"/>
    <path d="M1 1L25 26.5L50.5 1" stroke="#BBBBBB" strokeLinecap="round"/>
  </svg>
)

export default DropDown
