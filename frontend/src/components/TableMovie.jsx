import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { CloudDownload, Eye, SquarePen, Trash2 } from "lucide-react"
import { Link } from "react-router-dom"

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";
const Rows = (movie, index, admin) => {
    return (
        <tr key={index}>
            <td className={Text}>
                <div className="size-12 p-1 bg-dry border border-border rounded overflow-hidden">
                    <img src={`images/movies/${movie?.titleImage}`} alt={movie?.name} className="size-full object-cover" />
                </div>
            </td>
            <td className={`${Text}`}>{movie?.name}</td>
            <td className={`${Text}`}>{movie?.category}</td>
            <td className={`${Text}`}>{movie?.language}</td>
            <td className={`${Text}`}>{movie?.year}</td>
            <td className={`${Text}`}>{movie?.time} hr</td>
            <td className={`${Text} flex-rows float-right gap-2`}>
                {
                    admin
                        ? <>
                            <button className="border border-border bg-dry flex-rows gap-2 text-border rounded py-1 px-2">
                                Edit <SquarePen className="text-green-500" />
                            </button>
                            <button className="bg-submain text-white rounded flex-cols size-7">
                                <Trash2 />
                            </button>
                        </>
                        : <>
                            <button className="border border-border bg-dry flex-rows gap-2 text-border rounded p-1">
                                <CloudDownload className="text-green-500" />
                            </button>
                            <Link to={`/movie/${movie?.id}`} className="border border-border bg-dry flex-rows gap-2 text-text rounded p-1">
                                <Eye />
                            </Link>
                            <button className="border border-border bg-dry flex-rows gap-2 text-border rounded p-1">
                                <Trash2 className="text-submain" />
                            </button>
                        </>
                }
            </td>
        </tr>
    )
}

const TableMovie = ({ data, admin }) => {
    return (
        <ScrollArea className='overflow-hidden relative w-full'>
            <table className="w-full table-auto border border-border divide-y divide-border">
                <thead>
                    <tr className="bg-dryGray">
                        <th scope="col" className={`${Head}`}>
                            Image
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Name
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Category
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Language
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Year
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Hours
                        </th>
                        <th scope="col" className={`${Head} text-end`}>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-main divide-y divide-gray-800">
                    {
                        data.map((movie, index) => Rows(movie, index, admin))
                    }
                </tbody>
            </table>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}

export default TableMovie