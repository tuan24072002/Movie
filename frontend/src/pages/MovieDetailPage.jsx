import Layout from "@/layout/Layout"
import { useNavigate, useParams } from "react-router-dom"
import { MoviesData } from "@/data/MovieData"
import MovieInfo from "@/components/moviedetail/MovieInfo";
import MovieCasts from "@/components/moviedetail/MovieCasts";
import MovieRates from "@/components/moviedetail/MovieRates";
import { useEffect } from "react";
import MovieRelated from "../components/moviedetail/MovieRelated";

const MovieDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const movie = MoviesData.find(i => i?.name === id);

    useEffect(() => {
        if (!movie) {
            navigate("/movies")
        }
    }, [movie, navigate])

    return (
        <Layout>
            <MovieInfo movie={movie} />
            <div className="container mx-auto min-h-screen px-2 my-6">
                <MovieCasts />
                <MovieRates movie={movie} />
                <MovieRelated movie={movie} />
            </div>
        </Layout>
    )
}

export default MovieDetailPage