import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import LogoutButton from "./LogoutButton";

const Header = () => {
  const { isLoggedIn } = useAppContext();
  return (
    <div className="bg-dark-blue py-6">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-3xl text-dark-pink font-bold tracking-tight">
          <Link to="/">Holydays.com</Link>
        </span>
        <span className="flex space-x-2 items-center h-10">
          {isLoggedIn ? (
            <>
              <Link
                to="/my-bookings"
                className="text-white font-bold tracking-tight hover:text-dark-pink hover:underline-dotted"
              >
                My Bookings
              </Link>
              <Link
                to="/my-hotels"
                className="text-white font-bold tracking-tight hover:text-dark-pink hover:underline-dotted"
              >
                My Hotels
              </Link>
              <LogoutButton />
            </>
          ) : (
            <>
              <Link
                to="/register"
                className="text-white font-bold tracking-tight hover:text-dark-pink hover:underline-dotted"
              >
                Register
              </Link>
              <Link
                to="/sign-in"
                className="flex items-center text-white bg-dark-pink px-3 py-2 rounded-md font-bold tracking-tight hover:text-dark-pink hover:bg-pink"
              >
                Sign in
              </Link>
            </>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
