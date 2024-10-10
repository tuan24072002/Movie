import Layout from "@/layout/Layout"
import Filters from "@/components/Filters"

const MoviePage = () => {
    return (
        <Layout>
            <div className="min-h-screen container mx-auto px-2 my-6">
                <Filters />
            </div>
        </Layout>
    )
}

export default MoviePage