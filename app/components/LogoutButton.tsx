import React from 'react'
import useUserStore from './useUserStore'
import { useRouter } from 'next/navigation';

const LogoutButton = () => {
    const logout = useUserStore((state) => state.logout);
    const router = useRouter();

    const handleLogout = () => {
        logout();
        localStorage.removeItem('token');
        router.push('/loginUser');
    }
  return (
   <button onClick={handleLogout} className='btn btn-ghost'>
    logout
   </button>
  )
}

export default LogoutButton