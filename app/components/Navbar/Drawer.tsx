import Link from 'next/link'
import React from 'react'
interface DrawerProps {
  closeDrawer: () => void;
}

const Drawer = ({closeDrawer}: DrawerProps) => {
  return (
    <div className="drawer-side z-50">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li onClick={closeDrawer}><Link href="/product">Product</Link></li>
      <li onClick={closeDrawer}><Link href="/registerUser">Register</Link></li>
     
      
    </ul>
    
  </div>
  )
}

export default Drawer