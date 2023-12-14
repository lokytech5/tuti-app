import Link from 'next/link'
import React from 'react'
import useUserStore from '../useUserStore'
import LoadingSpinner from '../LoadingSpinner';

const DesktopMenu = () => {
  const { isAuthenticated, loading } = useUserStore();

  if(loading) return <LoadingSpinner/>

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
    </ul>

    </div>
  )
}

export default DesktopMenu


// // Inside your logout logic
// useUserStore.getState().logout();
// localStorage.removeItem('token'); // Don't forget to also clear the token from localStorage
