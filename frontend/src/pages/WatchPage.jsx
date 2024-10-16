import Layout from "@/layout/Layout"
import { Link, useParams } from "react-router-dom"
import { MoviesData } from "@/data/MovieData"
import { useState } from "react"
import { FaArrowLeft, FaHeart, FaCloudDownloadAlt, FaPlay } from "react-icons/fa"
import { TbFocus2 } from "react-icons/tb"
import { MdFullscreen } from "react-icons/md";
const WatchPage = () => {
    const { id } = useParams();
    const movie = MoviesData.find(i => i.id === Number(id));
    const [play, setPlay] = useState(false);
    const [focus, setFocus] = useState(true);
    const handleFullscreen = () => {
        const elem = document.documentElement;
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        }

        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
    };
    return (
        <>
            <Layout>
                <div className="container mx-auto p-6 mb-12 bg-dry">
                    <div className="flex-btn flex-wrap mb-6 gap-2 bg-main rounded border border-gray-800 p-6">
                        <Link to={`/movie/${movie?.id}`} className="md:text-xl text-sm flex gap-3 items-center font-bold text-dryGray">
                            <FaArrowLeft /> {movie?.name}
                        </Link>
                        <div className="flex-btn sm:w-auto w-full gap-5">
                            <button className="bg-white hover:text-submain transitions bg-opacity-30 text-white rounded px-3 py-3 text-sm">
                                <FaHeart />
                            </button>
                            <button className="bg-submain hover:text-main transitions text-white rounded font-medium px-8 py-3 flex-rows gap-2 text-sm">
                                <FaCloudDownloadAlt />Download
                            </button>
                        </div>
                    </div>
                    {/* Watch Movie */}
                    <div className={`${focus && "zIndex"} relative`}>
                        {
                            play ? (
                                <video controls autoPlay={play} className={`w-full h-[calc(100vh-200px)] bg-black rounded`}>
                                    <source src="/images/movie.mp4" type="video/mp4" title={movie?.name} />
                                </video>
                            ) : (
                                <div className={`w-full h-[calc(100vh-200px)] rounded-lg overflow-hidden relative`}>
                                    <div onClick={() => setPlay(true)} className="absolute top-0 left-0 right-0 bottom-0 bg-main bg-opacity-30 flex-rows">
                                        <button
                                            className="bg-white text-submain flex-rows border border-submain rounded-full size-20 font-medium text-xl"
                                        >
                                            <FaPlay />
                                        </button>
                                    </div>
                                    <img src={movie?.image ? `/images/movies/${movie?.image}` : "/images/user.png"} alt={movie?.name} className="w-full h-full object-cover rounded-lg" />
                                </div>
                            )
                        }
                        <div className="mt-4 flex items-center justify-end gap-4">
                            <p className="text-text">Modes:</p>
                            <div className="gap-4 flex items-center">
                                <button onClick={handleFullscreen} className="px-3 py-3 rounded-lg border border-border hover:bg-border transitions">
                                    <MdFullscreen className="size-6" />
                                </button>
                                <button onClick={() => setFocus(prev => !prev)} className="px-3 py-3 rounded-lg border border-border hover:bg-border transitions">
                                    <TbFocus2 className="size-6" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </Layout>
            {
                focus && <div className="fixed z-40 bg-main bg-opacity-90 top-0 left-0 right-0 bottom-0" />
            }
        </>
    )
}

export default WatchPage