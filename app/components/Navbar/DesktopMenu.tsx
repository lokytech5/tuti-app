import Link from 'next/link'
import React from 'react'

const DesktopMenu = () => {
  return (
    <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/product">Product</Link></li>
      
    </ul>

    </div>
  )
}

export default DesktopMenu