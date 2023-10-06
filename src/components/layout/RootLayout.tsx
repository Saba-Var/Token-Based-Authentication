import { Navbar } from '@/components'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
      <Navbar />

      <div className='pt-28 px-6'>
        <Outlet />
      </div>
    </>
  )
}

export default RootLayout
