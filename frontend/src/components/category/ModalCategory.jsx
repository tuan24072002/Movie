import { X } from "lucide-react"
import { Input } from "../UsedInput"
import { useRef } from "react"

const ModalCategory = ({ setOpenModal, category, setCategory }) => {
    const modalRef = useRef(null);
    const handleClose = () => {
        setOpenModal(false);
        setCategory();
    }
    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            handleClose();
        }
    }
    return (
        <div onClick={handleClickOutside} className="fixed bg-black/60 top-0 left-0 right-0 bottom-0 zIndex flex-cols">
            <div ref={modalRef} className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-fit bg-main text-white rounded-2xl flex-cols relative">
                <h2 className="text-3xl font-bold">{category ? "Update" : "Create"}</h2>
                <form className="flex flex-col gap-6 text-left mt-6 w-full">
                    <Input bg={"main"} label={"Category Name"} placeholder={category ? category.title : "Ex: Actions"} />
                    <button className="w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-dry border-2 border-subMain rounded bg-submain text-white">{category ? "Update" : "Add"}</button>
                </form>
                <X className="absolute top-4 right-4 size-6 border border-transparent hover:border-white rounded-md cursor-pointer" onClick={() => { handleClose() }} />
            </div>
        </div>
    )
}

export default ModalCategory