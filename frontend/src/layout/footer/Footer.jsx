import { Link } from "react-router-dom"
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
const Footer = () => {
    const Links = [
        {
            title: "Company",
            links: [
                {
                    name: "Home",
                    link: "/"
                },
                {
                    name: "About Us",
                    link: "/about-us"
                },
                {
                    name: "Contact Us",
                    link: "/contact-us"
                },
                {
                    name: "Movies",
                    link: "/movies"
                }
            ]
        },
        {
            title: "Top Categories",
            links: [
                {
                    name: "Action",
                    link: "/"
                },
                {
                    name: "Romantic",
                    link: "/"
                },
                {
                    name: "Drama",
                    link: "/"
                },
                {
                    name: "Historical",
                    link: "/"
                }
            ]
        },
        {
            title: "My Account",
            links: [
                {
                    name: "Dashboard",
                    link: "/dashboard"
                },
                {
                    name: "My Favorites",
                    link: "/favorite"
                },
                {
                    name: "Profile",
                    link: "/profile"
                },
                {
                    name: "Change Password",
                    link: "/password"
                }
            ]
        }
    ]
    return (
        <div className="bg-dry py-4 border-t-2 border-black">
            <div className="container mx-auto px-2">
                <div className="grid grid-cols-2 md:grid-cols-7 xl:grid-cols-12 gap-5 sm:gap-9 lg:gap-11 xl:gap-7 py-10 justify-between">
                    {
                        Links.map((link, index) => {
                            return (
                                <div key={index} className="col-span-1 md:col-span-2 lg:col-span-3 pb-3.5 sm:pb-0">
                                    <h3 className="text-base lg:leading-7 font-medium mb-4 sm:mb-5 lg:mb-6 pb-0.5">
                                        {link.title}
                                    </h3>
                                    <ul className="text-sm flex flex-col space-y-3">
                                        {
                                            link.links.map((item, index) => {
                                                return (
                                                    <li key={index} className="flex items-baseline">
                                                        <Link to={item.link} className="text-border inline-block w-full transitions hover:text-submain">
                                                            {item.name}
                                                        </Link>
                                                    </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                    <div className="pb-3.5 sm:pb-0 col-span-1 md:col-span-2 lg:col-span-3">
                        <Link to={'/'} className="text-3xl uppercase tracking-widest font-bold text-transparent bg-gradient-to-b from-[#ff8181] to-[#F20000] bg-clip-text transition-all transitions hover:from-[#F20000] hover:to-[#ff8181]">
                            Movie
                        </Link>
                        <p className="leading-7 text-sm text-border mt-3">
                            <Link to={"https://maps.app.goo.gl/29ZvTN9WSxW9SZyt7"} className="flex items-center gap-2">
                                <FaLocationDot />140 Le Trong Tan Street, Tay Thanh,
                            </Link>
                            <Link to={"https://maps.app.goo.gl/29ZvTN9WSxW9SZyt7"}>
                                Tan Phu, Ho Chi Minh City, Vietnam
                            </Link>
                            <Link to={"tel:+84 123 456 789"} className="flex items-center gap-2"><FaPhoneAlt />Tell: +84 123 456 789</Link>
                            <Link to={"mailto:abc@gmail.com"} className="flex items-center gap-2"><IoMdMail />Email: abc@gmail.com</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer