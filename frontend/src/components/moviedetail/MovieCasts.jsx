import { Users } from "lucide-react"
import Titles from "../Titles"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { CastsData } from "@/data/CastData"

const MovieCasts = () => {
    return (
        <div className="my-12">
            <Titles Icon={Users} title={"Casts"} />
            <div className="mt-10">
                <Swiper
                    autoplay={{
                        delay: 1000,
                        disableOnInteraction: false,
                    }}
                    loop
                    speed={1000}
                    modules={[Autoplay]}
                    spaceBetween={10}
                    breakpoints={{
                        475: {
                            slidesPerView: 1,
                        },
                        640: {
                            slidesPerView: 2,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 4,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 30
                        },
                    }}
                >
                    {
                        CastsData.map((cast, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className="w-full p-3 italic text-xs text-center rounded flex-cols bg-dry border border-gray-900">
                                        <img src={`/images/casts/${cast.image}`} alt={cast.fullName} className="w-full h-64 object-cover rounded mb-2" />
                                        <p>{cast.fullName}</p>
                                    </div>
                                </SwiperSlide>
                            )
                        })
                    }
                </Swiper>
            </div>
        </div >
    )
}

export default MovieCasts