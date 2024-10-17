import { BadgePlus, Heart, LayoutDashboard, List, RectangleEllipsis, Settings, Users } from "lucide-react"
import Layout from "@/layout/Layout"
import { NavLink } from "react-router-dom"
import { motion } from "framer-motion"

const SideLinks = [
    {
        name: "Dashboard",
        link: "/dashboard",
        icon: LayoutDashboard
    },
    {
        name: "Movies List",
        link: "/movieslist",
        icon: List
    },
    {
        name: "Add Movie",
        link: "/addmovie",
        icon: BadgePlus
    },
    {
        name: "Categories",
        link: "/categories",
        icon: LayoutDashboard
    },
    {
        name: "Users",
        link: "/users",
        icon: Users
    },
    {
        name: "Update Profile",
        link: "/profile",
        icon: Settings
    },
    {
        name: "Favorites Movies",
        link: "/favorites",
        icon: Heart
    },
    {
        name: "Change Password",
        link: "/password",
        icon: RectangleEllipsis
    }
]

const SideBar = ({ children }) => {
    const active = "bg-dryGray text-submain";
    const hover = "hover:bg-main";
    const inActive = "rounded font-medium text-sm transitions flex gap-3 items-center p-4";
    const Hover = ({ isActive }) => {
        return isActive ? `${active} ${inActive}` : `${hover} ${inActive}`
    }
    return (
        <Layout>
            <div className="container mx-auto min-h-screen px-2">
                <div className="xl:grid grid-cols-8 gap-10 items-start md:py-12 py-6">
                    <div className="col-span-2 sticky bg-dry border border-gray-800 p-6 xl:mb-0 mb-5 rounded-md">
                        {
                            SideLinks.map((link, index) => (
                                <NavLink
                                    to={link.link}
                                    key={index}
                                    className={Hover}
                                >
                                    <link.icon className="size-4 fill-white/50" /> <p>{link.name}</p>
                                </NavLink>
                            ))
                        }
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="col-span-6 rounded-md bg-dry border border-gray-800 p-6">
                        {children}
                    </motion.div>
                </div>
            </div>
        </Layout>
    )
}

export default SideBar