import { useState } from "react"
import Titles from "../Titles"
import { BsBookmarkStarFill, BsCaretLeftFill, BsCaretRightFill } from "react-icons/bs"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCoverflow, Navigation } from "swiper/modules"
import { MoviesData } from "../../data/MovieData"
import { FaHeart } from "react-icons/fa"
import { Link } from "react-router-dom"
import Stars from "../Stars"

const TopRated = () => {
    const [nextEl, setNextEl] = useState(null)
    const [prevEl, setPrevEl] = useState(null)
    return (
        <div className="my-6">
            <Titles title="Top Rated" Icon={BsBookmarkStarFill} />
            <div className="mt-10">
                <Swiper
                    effect={'coverflow'}
                    grabCursor
                    centeredSlides
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    navigation={{ nextEl, prevEl }}
                    // slidesPerView={1}
                    // spaceBetween={40}
                    autoplay
                    speed={300}
                    loop
                    modules={[Navigation, Autoplay, EffectCoverflow]}
                    breakpoints={{
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 60
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 40
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        475: {
                            slidesPerView: 1,
                            spaceBetween: 40
                        }
                    }}
                >
                    {
                        MoviesData.map((movie, index) => (
                            <SwiperSlide key={index}>
                                <div className="p-4 h-rate hovered border-border bg-dry rounded-lg overflow-hidden">
                                    <img src={`/images/movies/${movie.titleImage}`} alt={movie.name} className="w-full h-full object-cover rounded-lg" />
                                    <div className="px-4 gap-6 hoveres text-center absolute bg-black bg-opacity-50 top-0 left-0 right-0 bottom-0">
                                        <button className="size-12 flex-cols transitions hover:bg-submain rounded-full bg-white bg-opacity-30 text-white">
                                            <FaHeart />
                                        </button>
                                        <Link to={`/movie/${movie.name}`} className="font-semibold text-xl line-clamp-2">
                                            {movie.name}
                                        </Link>
                                        <div className="flex-rows gap-2 text-star">
                                            <Stars value={movie.rate} />
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
                <div className="w-full px-1 flex-rows gap-6 pt-12">
                    <button className="px-2 py-2 bg-submain rounded-md hover:bg-dry border-2 border-transparent hover:border-border transitions" ref={(e) => setPrevEl(e)}>
                        <BsCaretLeftFill />
                    </button>
                    <button className="px-2 py-2 bg-submain rounded-md hover:bg-dry border-2 border-transparent hover:border-border transitions" ref={(e) => setNextEl(e)}>
                        <BsCaretRightFill />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopRated