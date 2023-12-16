import Image from "next/image";
import Link from "next/link";
import imgWoman from "../../../public/images/avatar.png";
import LogoutButton from "../LogoutButton";
import useUserStore from "../useUserStore";
const UserMenu = () => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);
  return (
    <div className="dropdown dropdown-end text-secondary-content mr-2">
      <label tabIndex={0} className="btn btn-ghost btn-circle">
        <div className="avatar">
        <div className="w-12 rounded-full">
          <Image src={imgWoman} alt="Picture of a woman" />
        </div>
        </div>
      </label>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
      >
        {isAuthenticated && (
          <>
            <li className="btn btn-ghost">
              <Link href={"/userProfile"}>Profile</Link>
            </li>
            <li>
              <LogoutButton />
            </li>
          </>
        )}

        {!isAuthenticated && (
          <>{/* Add links for non-authenticated users if needed */}</>
        )}
      </ul>
    </div>
  );
};

export default UserMenu;
