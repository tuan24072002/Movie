import { Link, NavLink } from "react-router-dom";
import { FaHeart, FaSearch } from "react-icons/fa";
import { CgUser } from "react-icons/cg";
const handleSubmitSearch = async (e) => {
    e.preventDefault();
}
const NavBar = () => {
    return (
        <>
            <div className="bg-main shadow-md sticky top-0 z-20">
                <div className="container mx-auto py-6 px-2 lg:grid gap-10 grid-cols-7 justify-between items-center">
                    {/* Logo */}
                    <div className="col-span-1 lg:block hidden">
                        <Link to={'/'} className="text-3xl uppercase tracking-widest font-bold text-transparent bg-gradient-to-b from-[#ff8181] to-[#F20000] bg-clip-text transition-all transitions hover:from-[#F20000] hover:to-[#ff8181]">
                            Movie
                        </Link>
                    </div>
                    {/* Search */}
                    <div className="col-span-3">
                        <form className="w-full text-sm bg-dryGray rounded flex-btn gap-4" onSubmit={handleSubmitSearch}>
                            <input
                                type="text"
                                placeholder="Search movie from here..."
                                name="search"
                                id="search"
                                className="font-medium placeholder:text-border text-sm w-11/12 h-12 bg-transparent border-none px-4 text-black"
                            />
                            <button type="submit" className="bg-submain w-12 flex-cols h-12 rounded text-white">
                                <FaSearch />
                            </button>
                        </form>
                    </div>
                    {/* Menu */}
                    <div className="col-span-3 font-medium text-sm hidden xl:gap-14 2xl:gap-20 justify-between lg:flex xl:justify-end items-center">
                        <NavLink to={'/movies'} className={({ isActive }) => isActive ? "text-submain" : "hover:text-submain transitions text-white"}>
                            Movies
                        </NavLink>
                        <NavLink to={'/about-us'} className={({ isActive }) => isActive ? "text-submain" : "hover:text-submain transitions text-white"}>
                            About Us
                        </NavLink>
                        <NavLink to={'/contact-us'} className={({ isActive }) => isActive ? "text-submain" : "hover:text-submain transitions text-white"}>
                            Contact Us
                        </NavLink>
                        <NavLink to={'/login'} className={({ isActive }) => isActive ? "text-submain" : "hover:text-submain transitions text-white"}>
                            <CgUser className="size-8" />
                        </NavLink>
                        <NavLink to={'/favorite'} className={({ isActive }) => isActive ? "text-submain group relative" : "hover:text-submain transitions text-white group relative"}>
                            <FaHeart className="size-8" />
                            <div className={`size-5 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex-cols text-sm font-bold text-submain transitions group-hover:text-white group-hover :scale-125`}>
                                5
                            </div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NavBar