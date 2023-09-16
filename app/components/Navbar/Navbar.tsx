import React from 'react'
import imgWoman from '../public/next.svg'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
  <div className='drawer'> 
  <input id="my-drawer-3" type="checkbox" className="drawer-toggle" /> 
  <div className="drawer-content flex flex-col">
    {/* Navbar */}
    <div className="navbar bg-primary">
    <div className="flex-none lg:hidden">

    <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
  </div>
  <div className="flex-1">
    <a className="btn btn-ghost normal-case text-xl">tutiHairs</a>
  </div>

  {/* Add more links here */}
  <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link href="/product">Product</Link></li>
      
    </ul>

    </div>
    {/* End of more links here */}

    {/*Shopping cart Icon  */}
    <div className="flex-none">
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
            <span className="badge badge-sm indicator-item">0</span>
          </div>
        </label>  
      </div>
      {/*End of Shopping cart Icon  */}
      
      {/* User Profile */}
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <Image src={imgWoman} alt="Picture of a woman" />
          </div>
        </label>
        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <a className="justify-between">
              Profile
              <span className="badge">New</span>
            </a>
          </li>
          <li><a>Settings</a></li>
          <li><a>Logout</a></li>
        </ul>
      </div>
      {/* End of User Profile */}
    </div>
  </div>
  </div>

  

  </div>
  
  )
}

export default Navbar