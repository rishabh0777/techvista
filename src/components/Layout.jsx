import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='w-full pb-5'>
      <Header />
      <main>
      <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout