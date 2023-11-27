import React from 'react'
import imgWoman from '../../../public/next.svg'
import Image from 'next/image'
const UserMenu = () => {
  return (
    <div className="dropdown dropdown-end text-secondary-content">
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
  )
}

export default UserMenu