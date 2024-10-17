import { House } from "lucide-react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"

const NotFoundPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex-cols gap-8 w-full min-h-screen text-white bg-main lg:py-20 py-10 px-6">
            <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                src="/images/404.png" alt="" className="w-full h-96 object-contain brightness-200" />
            <motion.p
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-white/50 italic font-semibold leading-6 tracking-wider text-sm">The page you are looking for does not exist. You may have mistyped the URL</motion.p>
            <motion.div
                onClick={() => navigate("/")}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="px-6 py-3 bg-submain rounded-lg flex-rows gap-2 transitions cursor-pointer hover:text-main text-white font-semibold">
                <House /> Back home
            </motion.div>
        </div>
    )
}

export default NotFoundPage