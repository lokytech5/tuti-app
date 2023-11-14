import Link from 'next/link'
import React from 'react'
import useUserStore from '../useUserStore'
import LogoutButton from '../LogoutButton';

const DesktopMenu = () => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  return (
    <div className="hidden lg:flex">
    <ul className="menu menu-horizontal px-1 no-underline">
      <li><Link href="/product">Product</Link></li>

      {!isAuthenticated && (
        <>
         <li><Link href="/registerUser">Register</Link></li>
         <li><Link href="/loginUser">Login</Link></li>
        </>
      )}

      {isAuthenticated && (
        <LogoutButton/>
      )}
    </ul>

    </div>
  )
}

export default DesktopMenu


// // Inside your logout logic
// useUserStore.getState().logout();
// localStorage.removeItem('token'); // Don't forget to also clear the token from localStorage
