import Link from 'next/link'
import React from 'react'

const Drawer = () => {
  return (
    <div className="drawer-side z-50">
    <label htmlFor="my-drawer-3" className="drawer-overlay"></label> 
    <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
      {/* Sidebar content here */}
      <li><Link href="/product">Product</Link></li>
      
    </ul>
    
  </div>
  )
}

export default Drawer