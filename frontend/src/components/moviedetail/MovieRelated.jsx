import { BsCollectionFill } from "react-icons/bs"
import Titles from "../Titles"
import { MoviesData } from "@/data/MovieData"
import MovieCard from "@/components/MovieCard"

const MovieRelated = ({ movie }) => {
    const relatedMovies = MoviesData.filter(i => (i.category === movie.category) && (i.id !== movie.id))
    return (
        relatedMovies.length > 0 && <div className="my-12">
            <Titles title="Related Movies" Icon={BsCollectionFill} />
            <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 bg-dry">
                {
                    relatedMovies.map((m, index) => (
                        <MovieCard key={index} movie={m} />
                    ))
                }
            </div>
        </div>
    )
}

export default MovieRelated