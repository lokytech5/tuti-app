"use client"
import React, { useState } from 'react'
import Drawer from './Drawer'
import UserMenu from './UserMenu'
import HamburgerMenu from './HamburgerMenu'
import DesktopMenu from './DesktopMenu'
import Cart from './Cart'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'
import CartModal from '../CartModal'

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);


  return (
  <div className='drawer'> 
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" checked={isDrawerOpen} onChange={() => setIsDrawerOpen(!isDrawerOpen)} />
  <div className="drawer-content flex flex-col">
    <div className="navbar bg-neutral">
    <div className="flex-none lg:hidden">
      <HamburgerMenu/>
  </div>
  <div className="flex-1">
    <Link href="/home" className="btn btn-ghost normal-case text-xl">tutiHairs</Link>
  </div>
       
       <ThemeToggle/>
       <DesktopMenu/>
    <div className="flex-none">
    <Cart onCartClick={() => setIsCartModalOpen(true)}/> 
        <UserMenu/>
    </div>
  </div>
  </div>
  
  <Drawer closeDrawer={() => setIsDrawerOpen(false)} />
  <CartModal isOpen={isCartModalOpen} onClose={() => setIsCartModalOpen(false)} />
   


  </div>
  
  )
}

export default Navbar