
import React from 'react'
import { FooterComponent, NavbarComponent } from '..'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <NavbarComponent />
      <div className='flex-grow'>
        {children}
      </div>
      <FooterComponent />
    </div>
  )
}

export default Layout