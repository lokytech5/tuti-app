import Link from "next/link";
import LogoutButton from "../LogoutButton";
import useUserStore from "../useUserStore";
interface DrawerProps {
  closeDrawer: () => void;
}

const Drawer = ({ closeDrawer }: DrawerProps) => {
  const isAuthenticated = useUserStore((state) => state.isAuthenticated);

  return (
    <div className="drawer-side z-50">
      <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
      <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content flex flex-col justify-center items-center space-y-4 no-underline">
        {/* Sidebar content here */}
        <li onClick={closeDrawer} className="text-center">
          <Link href="/product">Product</Link>
        </li>
        {!isAuthenticated && (
          <>
            <li onClick={closeDrawer} className="text-center">
              <Link href="/registerUser">Register</Link>
            </li>
            <li onClick={closeDrawer} className="text-center">
              <Link href="/loginUser">Login</Link>
            </li>
          </>
        )}

        {isAuthenticated && (
          <li className="text-center">
            <LogoutButton />
          </li>
        )}
      </ul>
    </div>
  );
};

export default Drawer;
