import { Download, Play, Share2 } from "lucide-react"
import FlexMovieItems from "../FlexMovieItems"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

const MovieInfo = ({ movie }) => {
    return (
        <div className="w-full xl:h-screen relative text-white">
            <img src={"/images/movies/" + movie?.image} alt={movie?.name} className="w-full h-screen object-cover hidden xl:inline-block" />
            <div className="xl:bg-main bg-dry flex-cols xl:bg-opacity-90 xl:absolute top-0 left-0 right-0 bottom-0">
                <div className="container px-3 mx-auto 2xl:px-32 xl:grid grid-cols-3 flex-cols py-10 lg:py-20 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="xl:col-span-1 w-full xl:order-none order-last h-header bg-dry border border-gray-800 rounded-lg overflow-hidden">
                        <img src={"/images/movies/" + movie?.titleImage} alt={movie?.name} className="w-full h-full object-cover" />
                    </motion.div>
                    <div className="col-span-2 md:grid grid-cols-5 gap-4 items-center">
                        {/* Info */}
                        <div className="col-span-3 flex flex-col gap-10">
                            {/* Title */}
                            <motion.h1
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="xl:text-4xl capitalize font-sans text-2xl font-bold">
                                {movie?.name}
                            </motion.h1>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="flex items-center gap-4 font-medium text-dryGray">
                                <p className="flex-rows bg-submain text-xs px-2 py-1">
                                    HD 4K
                                </p>
                                <FlexMovieItems movie={movie && movie} />
                            </motion.div>
                            {/* Description */}
                            <motion.p
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="text-text text-sm leading-7"> {movie?.desc} </motion.p>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 }}
                                className="grid sm:grid-cols-5 grid-cols-3 gap-4 p-6 bg-main border border-gray-800 rounded-lg">
                                {/* Share */}
                                <div className="col-span-1 flex-cols border-r border-border">
                                    <button className="w-10 h-10 flex-cols rounded-lg bg-white bg-opacity-20 hover:bg-opacity-30">
                                        <Share2 />
                                    </button>
                                </div>
                                {/* Language */}
                                <div className="col-span-2 flex-cols font-medium text-sm">
                                    <p>
                                        Language:
                                        <span className="ml-2 truncate">
                                            {movie?.language}
                                        </span>
                                    </p>
                                </div>
                                {/* Watch */}
                                <div className="sm:col-span-2 col-span-3 flex justify-end font-medium text-sm">
                                    <Link to={`/watch/${movie?.id}`} className="bg-dry hover:bg-submain transitions border-2 border-submain rounded-full flex-rows gap-4 w-full py-3 group">
                                        <Play className="size-4 fill-submain text-submain group-hover:fill-white group-hover:text-white transitions" /> Watch
                                    </Link>
                                </div>
                            </motion.div>
                        </div>
                        {/* Download */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1 }}
                            className="col-span-2 md:mt-0 mt-2 flex justify-end">
                            <button className="md:w-1/4 w-full relative flex-cols bg-submain hover:bg-transparent border-2 border-submain transitions md:h-64 h-20 rounded font-medium">
                                <div className="flex-rows gap-6 text-base uppercase tracking-widest absolute md:rotate-90">
                                    Download <Download className="md:-rotate-90 size-6" />
                                </div>
                            </button>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieInfo