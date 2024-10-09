import Titles from "../Titles"
import { BsCollectionFill } from "react-icons/bs"
import { MoviesData } from "@/data/MovieData"
import MovieCard from "../MovieCard"
const PopularMovies = () => {
    return (
        <div className="my-16">
            <Titles title="Popular Movies" Icon={BsCollectionFill} />
            <div className="grid sm:mt-12 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                {
                    MoviesData.slice(0, 8).map((movie, index) => (
                        <MovieCard key={index} movie={movie} />
                    ))
                }
            </div>
        </div>
    )
}

export default PopularMovies