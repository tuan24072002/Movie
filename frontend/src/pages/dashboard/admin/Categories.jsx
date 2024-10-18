import { CirclePlus } from "lucide-react"
import SideBar from "../SideBar"
import TableCategory from "@/components/TableCategory"
import { CategoriesData } from "@/data/CategoryData"

const Categories = () => {
    return (
        <SideBar>
            <div className="flex flex-col gap-6">
                <div className="flex-btn gap-2">
                    <h2 className="text-xl font-bold">
                        Categories
                    </h2>
                    <button className="bg-submain font-medium transitions group hover:bg-main border border-submain text-white rounded py-2 px-4 flex-rows gap-4">
                        <CirclePlus className="size-5" /> Create
                    </button>
                </div>
                <TableCategory data={CategoriesData} admin={true} />
            </div>
        </SideBar>
    )
}

export default Categories