import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";

const Header = () => {
    const { isLoggedIn } = useAppContext();
    return (
        <div className="bg-dark-blue py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl text-dark-pink font-bold tracking-tight">
                    <Link to="/">HolyVaca.com</Link>
                </span>
                <span className="flex space-x-2">
                    {isLoggedIn ? <>
                        <Link to="/my-bookings" className="text-white font-bold tracking-tight hover:text-dark-pink hover:underline-dotted">My Bookings</Link>
                        <Link to="/my-hotels" className="text-white font-bold tracking-tight hover:text-dark-pink hover:underline-dotted">My Hotels</Link>
                        <button className="flex items-center text-white mb-3 px-3 rounded-md font-bold tracking-tight hover:text-dark-pink hover:bg-white">Sign out</button>
                    </> :
                    <Link to="/register" className="flex items-center text-white bg-dark-pink px-3 rounded-md font-bold tracking-tight hover:text-dark-pink hover:bg-white">Sign in</Link>
                    }
                </span>
            </div>
        </div>
    );
};

export default Header;