import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { SquarePen, Trash2 } from "lucide-react"

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";
const Rows = (category, index, admin) => {
    return (
        <tr key={index}>
            <td className={`${Text}`}>{category?.id}</td>
            <td className={`${Text}`}>{category?.date}</td>
            <td className={`${Text}`}>{category?.title}</td>
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
                                <Trash2 className="text-submain" />
                            </button>
                        </>
                }
            </td>
        </tr>
    )
}

const TableCategory = ({ data, admin }) => {
    return (
        <ScrollArea className='overflow-hidden relative w-full'>
            <table className="w-full table-auto border border-border divide-y divide-border">
                <thead>
                    <tr className="bg-dryGray">
                        <th scope="col" className={`${Head}`}>
                            Id
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Date
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Title
                        </th>
                        <th scope="col" className={`${Head} text-end`}>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-main divide-y divide-gray-800">
                    {
                        data.map((category, index) => Rows(category, index, admin))
                    }
                </tbody>
            </table>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}

export default TableCategory