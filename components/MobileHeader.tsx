import React from 'react'
import MobileSideBar from './MobileSideBar'

const MobileHeader = () => {
  return (
    <div className='lg:hidden px-6 h-[50px] flex items-center bg-green-500 border-b-2 fixed top-0 w-full z-50'>
        <MobileSideBar/>
    </div>
  )
}

export default MobileHeader