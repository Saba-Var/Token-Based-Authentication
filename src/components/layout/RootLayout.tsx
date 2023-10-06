import { Navbar } from '@/components'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <div className='bg-red-800'>
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout
