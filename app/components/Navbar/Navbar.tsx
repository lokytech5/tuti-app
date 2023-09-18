import React, { useEffect } from 'react'
import Drawer from './Drawer'
import UserMenu from './UserMenu'
import HamburgerMenu from './HamburgerMenu'
import DesktopMenu from './DesktopMenu'
import Cart from './Cart'
import Link from 'next/link'
import { toggleTheme } from './themeUtils'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {

  return (
  <div className='drawer'> 
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    <div className="navbar bg-primary">
    <div className="flex-none lg:hidden">
      <HamburgerMenu/>
  </div>
  <div className="flex-1">
    <Link href="/home" className="btn btn-ghost normal-case text-xl">tutiHairs</Link>
  </div>
       
       <ThemeToggle/>
       <DesktopMenu/>
    <div className="flex-none">
        <Cart/>
        <UserMenu/>
    </div>
  </div>
  </div>
  
  <Drawer/>

  </div>
  
  )
}

export default Navbar