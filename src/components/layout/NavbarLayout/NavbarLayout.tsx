import { Navbar } from '@/components'
import { Outlet } from 'react-router-dom'

const NavbarLayout = () => {
  return (
    <>
      <Navbar />

      <Outlet />
    </>
  )
}

export default NavbarLayout
