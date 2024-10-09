import { FaRegCalendarAlt } from "react-icons/fa"
import { BiTime } from "react-icons/bi"

const FlexMovieItems = ({ movie }) => {
    return (
        <>
            <div className="flex items-center gap-2">
                <span className="text-sm font-medium">{movie.category}</span>
            </div>
            <div className="flex items-center gap-2">
                <FaRegCalendarAlt className="size-3 text-submain" />
                <span className="text-sm font-medium">{movie.year}</span>
            </div>
            <div className="flex items-center gap-2">
                <BiTime className="size-3 text-submain" />
                <span className="text-sm font-medium">{movie.time}</span>
            </div>
        </>
    )
}

export default FlexMovieItems