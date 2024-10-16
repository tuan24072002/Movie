import Layout from "@/layout/Layout"
import Filters from "@/components/Filters"
import { MoviesData } from "@/data/MovieData"
import MovieCard from "@/components/MovieCard"
import { useState } from "react"
import { ArrowDown } from "lucide-react"

const MoviePage = () => {
    const maxPage = 8;
    const [page, setPage] = useState(maxPage)
    const handleLoadingMore = () => {
        setPage(page + maxPage)
    }
    return (
        <Layout>
            <div className="min-h-screen container mx-auto px-2 my-6">
                <Filters />
                <p className="text-lg font-medium my-6">
                    Total <span className="font-bold text-submain">{MoviesData.length}</span>{" "}items found
                </p>
                <div className="grid sm:mt-10 mt-6 xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
                    {
                        MoviesData.slice(0, page).map((movie, index) => (
                            <MovieCard key={index} movie={movie} />
                        ))
                    }
                </div>
                {/* Loading More */}
                {
                    page < MoviesData.length &&
                    <div className="w-full flex-cols md:my-20 my-10">
                        <button
                            onClick={handleLoadingMore}
                            className="flex-rows gap-3 text-white py-3 px-8 rounded font-semibold border-2 border-submain group">
                            Loading more <ArrowDown className="size-6 group-hover:rotate-180 transitions" />
                        </button>
                    </div>
                }
            </div>
        </Layout>
    )
}

export default MoviePage