import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination } from "swiper/modules"
import { MoviesData } from "@/data/MovieData"
import FlexMovieItems from "../FlexMovieItems"
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
const banner = () => {
    return (
        <div className="relative w-full">
            <Swiper
                direction="vertical"
                slidesPerView={1}
                loop
                grabCursor
                pagination={{
                    clickable: true,
                }}
                speed={1000}
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className="w-full xl:h-96 bg-dry lg:h-64 h-48"
            >
                {
                    MoviesData.slice(0, 6).map((movie, index) => (
                        <SwiperSlide key={index} className="relative rounded overflow-hidden">
                            <img src={`/images/movies/${movie.image}`} alt={movie.name} className="w-full h-full object-cover" />
                            <div className="absolute linear-bg xl:pl-52 sm:pl-32 pl-8 top-0 bottom-0 right-0 left-0 flex flex-col justify-center lg:gap-8 md:gap-5 gap-4">
                                <h1 className="xl:text-4xl truncate capitalize font-sans sm:text-2xl text-xl font-bold">
                                    {movie.name}
                                </h1>
                                <div className="flex gap-5 items-center text-dryGray">
                                    <FlexMovieItems movie={movie} />
                                </div>
                                <div className="flex gap-5 items-center">
                                    <Link to={`/movie/${movie.name}`} className="bg-submain hover:text-main transitions text-white px-8 py-3 rounded font-medium sm:text-sm text-xs">
                                        Watch now
                                    </Link>
                                    <button className="bg-white hover:text-submain transitions text-white px-3 py-3 rounded text-sm bg-opacity-30">
                                        <FaHeart />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}

export default banner