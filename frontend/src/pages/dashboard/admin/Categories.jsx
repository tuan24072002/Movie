
import SideBar from "../SideBar"
import TableCategory from "@/components/TableCategory"
import { CategoriesData } from "@/data/CategoryData"
import { useState } from "react"
import ModalCategory from "@/components/category/ModalCategory"
import { CirclePlus } from "lucide-react"

const Categories = () => {
    const [category, setCategory] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const handleEditCategory = (_category) => {
        setCategory(_category);
        setOpenModal(prev => !prev);
    }
    return (
        <>
            <SideBar>
                <div className="flex flex-col gap-6">
                    <div className="flex-btn gap-2">
                        <h2 className="text-xl font-bold">
                            Categories
                        </h2>
                        <button onClick={() => setOpenModal(true)} className="bg-submain font-medium transitions group hover:bg-main border border-submain text-white rounded py-2 px-4 flex-rows gap-4">
                            <CirclePlus className="size-5" /> Create
                        </button>
                    </div>
                    <TableCategory data={CategoriesData} admin={true} handleEditCategory={handleEditCategory} />
                </div>
            </SideBar>
            {
                openModal && <ModalCategory setOpenModal={setOpenModal} category={category} setCategory={setCategory} />
            }
        </>
    )
}

export default Categories