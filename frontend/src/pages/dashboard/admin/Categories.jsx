
import SideBar from "../SideBar"
import TableCategory from "@/components/TableCategory"
import { CategoriesData } from "@/data/CategoryData"
import ModalAdd from "../../../components/category/ModalAdd"

const Categories = () => {
    return (
        <SideBar>
            <div className="flex flex-col gap-6">
                <div className="flex-btn gap-2">
                    <h2 className="text-xl font-bold">
                        Categories
                    </h2>
                    <ModalAdd />
                </div>
                <TableCategory data={CategoriesData} admin={true} />
            </div>
        </SideBar>
    )
}

export default Categories