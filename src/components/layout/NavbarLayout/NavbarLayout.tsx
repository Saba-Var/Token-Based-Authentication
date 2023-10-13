import { Outlet } from 'react-router-dom'
import { Navbar } from '@/components'

const NavbarLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

export default NavbarLayout
