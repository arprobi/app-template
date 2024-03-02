import { Fragment } from 'react'
import { Outlet } from 'react-router-dom'

const Applayout = () => {
  return (
    <Fragment>
      <div className='bg-gray-100'>
        <Outlet />
      </div>
    </Fragment>
  )
}

export default Applayout