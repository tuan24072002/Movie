import { motion } from "framer-motion"
const Head = ({ title }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="w-full bg-deepGray lg:h-64 h-40 relative overflow-hidden rounded-md">
            <img src={"/images/head.png"} alt="Head" className="w-full h-full object-cover" />
            <div className="absolute lg:top-24 top-16 w-full flex-cols">
                <h1 className="text-2xl lg:text-h1 text-white text-center font-bold">
                    {title && title}
                </h1>
            </div>
        </motion.div>
    )
}

export default Head