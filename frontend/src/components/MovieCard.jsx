import { FaHeart } from "react-icons/fa"
import { Link } from "react-router-dom"


const MovieCard = ({ movie }) => {
    return (
        <>
            <div className="border border-border p-1 hover:scale-95 transitions relative rounded overflow-hidden">
                <Link to={`/movie/${movie.name}`} className="w-full">
                    <img src={`/images/movies/${movie.image}`} alt={movie.name} className="w-full h-64 object-cover" />
                </Link>
                <div className="absolute flex-btn bottom-0 right-0 left-0 bg-main bg-opacity-60 text-white px-4 py-3">
                    <h3 className="font-semibold truncate">{movie.name}</h3>
                    <button className="size-9 text-sm flex-cols transitions hover:bg-transparent border-2 border-submain rounded-md bg-submain text-white">
                        <FaHeart />
                    </button>
                </div>
            </div>
        </>
    )
}

export default MovieCard