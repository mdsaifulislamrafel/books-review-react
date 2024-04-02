import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div className="navbar static mt-6 bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 w-52">
                        <li className="flex">
                            <NavLink to="/" className={({ isActive, isPending }) =>
                                isActive
                                    ? "active bg-green-500 text-white font-bold border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                                    : isPending
                                        ? "pending"
                                        : "cursor-pointer hover:border-2 transition border-[#23BE0A] rounded-full text-black px-6 py-2"
                            }  >Home</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to="/markBooks" className={({ isActive, isPending }) =>
                                isActive
                                    ? "active bg-green-500 text-white font-bold border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                                    : isPending
                                        ? "pending"
                                        : "cursor-pointer hover:border-2 transition border-[#23BE0A] rounded-full text-black px-6 py-2"
                            }  >Listed Books</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to="/chart" className={({ isActive, isPending }) =>
                                isActive
                                    ? "active bg-green-500 text-white font-bold border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                                    : isPending
                                        ? "pending"
                                        : "cursor-pointer hover:border-2 transition border-[#23BE0A] rounded-full text-black px-6 py-2 "
                            }  >Pages to Read</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to="/latest-books" className={({ isActive, isPending }) =>
                                isActive
                                    ? "active bg-green-500 text-white font-bold border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                                    : isPending
                                        ? "pending"
                                        : "cursor-pointer hover:border-2 transition border-[#23BE0A] rounded-full text-black px-6 py-2 "
                            }  >Programming Books</NavLink>
                        </li>
                        <li className="flex">
                            <NavLink to="/contact" className={({ isActive, isPending }) =>
                                isActive
                                    ? "active bg-green-500 text-white font-bold border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                                    : isPending
                                        ? "pending"
                                        : "cursor-pointer hover:border-2 transition border-[#23BE0A] rounded-full text-black px-6 py-2 "
                            }  >Contact</NavLink>
                        </li>

                    </ul>
                </div>
                <NavLink to="/" aria-label="Back to homepage" className="flex items-center p-2">
                    <h2 className="text-sm md:text-3xl bg-300% font-bold bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">Book Vibe</h2>
                </NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="flex gap-2 px-1">
                    <li className="flex">
                        <NavLink to="/" className={({ isActive, isPending }) =>
                            isActive
                                ? "active bg-green-500 text-white font-bold border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                                : isPending
                                    ? "pending"
                                    : "cursor-pointer hover:border-2 transition border-[#23BE0A] rounded-full  text-black px-6 py-2"
                        }  >Home</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/markBooks" className={({ isActive, isPending }) =>
                            isActive
                                ? "active bg-green-500 text-white font-bold border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                                : isPending
                                    ? "pending"
                                    : "cursor-pointer hover:border-2 transition border-[#23BE0A] rounded-full text-black px-6 py-2"
                        }  >Listed Books</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/chart" className={({ isActive, isPending }) =>
                            isActive
                                ? "active bg-green-500 text-white font-bold border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                                : isPending
                                    ? "pending"
                                    : "cursor-pointer hover:border-2 transition border-[#23BE0A] rounded-full text-black px-6 py-2 "
                        }  >Pages to Read</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/latest-books" className={({ isActive, isPending }) =>
                            isActive
                                ? "active bg-green-500 text-white font-bold border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                                : isPending
                                    ? "pending"
                                    : "cursor-pointer hover:border-2 transition border-[#23BE0A] rounded-full text-black px-6 py-2 "
                        }  >Programming Books</NavLink>
                    </li>
                    <li className="flex">
                        <NavLink to="/contact" className={({ isActive, isPending }) =>
                            isActive
                                ? "active bg-green-500 text-white font-bold border-2 transition border-[#23BE0A]  rounded-full px-6 py-2"
                                : isPending
                                    ? "pending"
                                    : "cursor-pointer hover:border-2 transition border-[#23BE0A] rounded-full text-black px-6 py-2 "
                        }  >Contact us</NavLink>
                    </li>
                </ul>
            </div>
            <div className="navbar-end md:flex  space-x-2">
                <button className="self-center p-3  md:px-8 md:py-3 rounded-lg text-sm md:text-xl bg-[#23BE0A] text-white font-bold ">Sign in</button>
                <button className="self-center p-3 md:px-8 md:py-3 rounded-lg text-sm md:text-xl bg-[#59C6D2] text-white font-bold">Sign up</button>
            </div>
        </div>
    );
};

export default NavBar;