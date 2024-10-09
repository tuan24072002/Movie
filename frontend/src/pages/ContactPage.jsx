import Layout from "@/layout/Layout"
import Head from "../components/Head"
import { FiMail, FiMapPin, FiPhoneCall } from "react-icons/fi"
import { Link } from "react-router-dom"

const ContactPage = () => {
    const contactData = [
        {
            title: "Email Us",
            info: "Interactively grow backend ideas for cross-platform models.",
            icon: <FiMail />,
            contact: "abc@gmail.com"
        },
        {
            title: "Call Us",
            info: "Distinctively exploit optimal alignments for intuitive bandwidth.",
            icon: <FiPhoneCall />,
            contact: "+84 123 456 789"
        },
        {
            title: "Location",
            info: "140 Le Trong Tan Street, Tay Thanh, Tan Phu, Ho Chi Minh City, Viet Nam",
            icon: <FiMapPin />,
            contact: ""
        }
    ]
    return (
        <Layout>
            <div className="h-full container mx-auto px-2 my-6">
                <Head title="Contact Us" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:gap-8 gap-6 lg:my-20 my-10">
                    {
                        contactData.map((item, index) => (
                            <div key={index} className="border border-border flex-cols p-10 bg-dry rounded-lg text-center">
                                <span className="flex-cols size-20 rounded-full bg-main text-submain text-2xl">
                                    {item.icon}
                                </span>
                                <h5 className="text-xl font-semibold my-2">{item.title}</h5>
                                <p className="mb-0 text-sm text-text leading-7">
                                    <Link to={index === 0 ? `mailto:${item.contact}` : `tel:${item.contact}`} className="text-blue-600">{item.contact}</Link>
                                    {" "} {item.info}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </Layout>
    )
}

export default ContactPage