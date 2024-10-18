import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { Trash2 } from "lucide-react"

const Head = "text-xs text-left text-main font-semibold px-6 py-2 uppercase";
const Text = "text-sm text-left leading-6 whitespace-nowrap px-5 py-3";
const Rows = (user, index, admin) => {
    return (
        <tr key={index}>
            <td className={`${Text}`}>
                <div className="size-12 p-1 bg-dry border border-border rounded overflow-hidden">
                    <img src={`images/casts/${user?.image}`} alt={user?.fullName} className="size-full object-cover" />
                </div>
            </td>
            <td className={`${Text}`}>{user?.date}</td>
            <td className={`${Text}`}>{user?.fullName}</td>
            <td className={`${Text}`}>{user?.email}</td>
            {
                admin &&
                <td className={`${Text} flex-rows float-right gap-2`}>
                    <button className="bg-submain text-white rounded flex-cols size-7">
                        <Trash2 />
                    </button>
                </td>
            }
        </tr>
    )
}

const TableUser = ({ data, admin }) => {
    return (
        <ScrollArea className='overflow-hidden relative w-full'>
            <table className="w-full table-auto border border-border divide-y divide-border">
                <thead>
                    <tr className="bg-dryGray">
                        <th scope="col" className={`${Head}`}>
                            Image
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Date
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Full Name
                        </th>
                        <th scope="col" className={`${Head}`}>
                            Email
                        </th>
                        <th scope="col" className={`${Head} text-end`}>
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-main divide-y divide-gray-800">
                    {
                        data.map((user, index) => Rows(user, index, admin))
                    }
                </tbody>
            </table>
            <ScrollBar orientation="horizontal" />
        </ScrollArea>
    )
}

export default TableUser