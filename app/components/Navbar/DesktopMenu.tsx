import Link from "next/link";
import LoadingSpinner from "../LoadingSpinner";
import useUserStore from "../useUserStore";

const DesktopMenu = () => {
  const { isAuthenticated, loading } = useUserStore();

  if (loading) return <LoadingSpinner />;

  return (
    <div className="hidden lg:flex">
      <ul className="menu menu-horizontal px-1 no-underline">
        <li>
          <Link href="/product">Product</Link>
        </li>

        {!isAuthenticated && (
          <>
            <li>
              <Link href="/registerUser">Register</Link>
            </li>
            <li>
              <Link href="/loginUser">Login</Link>
            </li>
            <li>
              <Link href="/aboutUs">AboutUs</Link>
            </li>
          </>
        )}
      </ul>
    </div>
  );
};

export default DesktopMenu;
