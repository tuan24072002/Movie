import { Trash2 } from "lucide-react"
import SideBar from "../SideBar"
import TableMovie from "@/components/TableMovie"
import { MoviesData } from "@/data/MovieData"
const MovieList = () => {
    return (
        <SideBar>
            <div className="flex flex-col gap-6">
                <div className="flex-btn gap-2">
                    <h2 className="text-xl font-bold">
                        Movies List
                    </h2>
                    <button className="bg-main font-medium transitions group hover:bg-submain border border-submain text-white rounded py-3 px-6 flex-rows gap-2">
                        Remove <Trash2 className="text-submain group-hover:text-white transitions" />
                    </button>
                </div>
                <TableMovie data={MoviesData} admin={true} />
            </div>
        </SideBar>
    )
}

export default MovieList