import React from 'react'
import { NavItem } from './NavItem'


export const Header = () => {
  return (
    <div className='w-full z-10 relative h-20 flex justify-between items-center px-9 max-w-7xl m-auto'>
        <img src='./assets/LOGO_FRONT.png' alt='' className='w-[14%] p-2 rounded-[4px] object-contain '/>

        <section className='flex w-[30%] justify-between '>
            <NavItem />
        </section>
    </div>
  )
}
