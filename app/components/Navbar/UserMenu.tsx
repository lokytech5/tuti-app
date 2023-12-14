import React from 'react'
import imgWoman from '../../../public/next.svg'
import Image from 'next/image'
import Link from 'next/link'
import useUserStore from '../useUserStore'
import LogoutButton from '../LogoutButton'
const UserMenu = () => {

  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  return (
    <div className="dropdown dropdown-end text-secondary-content">
    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
      <div className="w-10 rounded-full">
        <Image src={imgWoman} alt="Picture of a woman" />
      </div>
    </label>
    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      {isAuthenticated && (
          <>
            <li>
              <Link href={'/userProfile'}>
                Profile
              </Link>
            </li>
            <li>Settings</li>
            <li><LogoutButton/></li>
          </>
        )}

        {!isAuthenticated && (
          <>
            {/* Add links for non-authenticated users if needed */}
          </>
        )}
    </ul>
  </div>
  )
}

export default UserMenu