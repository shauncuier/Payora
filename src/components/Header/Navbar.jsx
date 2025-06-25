import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/Firebase.config"; // আপনার Firebase config ফাইলটি ইমপোর্ট করুন
import Logo from "/PayoraLogo.png";
import { AuthContext } from "../../Context/AuthContext";

const Navbar = () => {
    const { balance } = useContext(AuthContext);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const links = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>

            <li>
                <NavLink to="/billing">Billing</NavLink>
            </li>
            {
                user ? (<li>
                    <NavLink to="/profile">Profile</NavLink>
                </li>) : ("")
            }

        </>
    );

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate("/signin");
        } catch (error) {
            console.error("Logout failed: ", error.message);
        }
    };

    return (
        <div className="navbar bg-base-100  w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-10 mt-3 w-52 p-2 shadow"
                    >
                        {links}
                    </ul>
                </div>
                <Link to="/" className="flex items-center gap-2">
                    <img className="h-[50px]" src={Logo} alt="Payora Logo" />
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-medium">{links}</ul>
            </div>

            <div className="navbar-end">
                {user ? (
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL || "https://i.ibb.co.com/Z1SQZLsb/1209195215ea.jpg"} alt="User" />
                            </div>
                        </label>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                        >
                            <li>
                                <Link to="/profile" className="font-semibold">{user.displayName || "Jhon Doe"}</Link>
                            </li>
                            <li>
                                <p className="font-semibold">Balance: ৳{balance || 0}</p>
                            </li>
                            <li>
                                <button onClick={handleLogout}>Logout</button>
                            </li>
                        </ul>
                    </div>
                ) : (
                    <div className="flex gap-2">
                        <NavLink to="/signin" className="btn btn-sm">
                            Sign In
                        </NavLink>
                        <NavLink to="/register" className="btn btn-sm">
                            Register
                        </NavLink>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Navbar;
