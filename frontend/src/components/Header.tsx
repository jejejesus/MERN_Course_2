import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="bg-dark-blue py-6">
            <div className="container mx-auto flex justify-between">
                <span className="text-3xl text-dark-pink font-bold tracking-tight">
                    <Link to="/">HolyVaca.com</Link>
                </span>
                <span className="flex space-x-2">
                    <Link to="/sign-in" className="flex items-center text-white bg-dark-pink px-3 rounded-md font-bold tracking-tight hover:text-dark-pink hover:bg-white">Sign in</Link>
                </span>
            </div>
        </div>
    );
};

export default Header;