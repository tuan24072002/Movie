import { X } from "lucide-react"
import { Input, UploadImage } from "../UsedInput"
import { useRef, useState } from "react"
import { motion } from "framer-motion"

const ModalCast = ({ setOpenModal, cast, setCast }) => {
    const modalRef = useRef(null);
    const [castImage, setCastImage] = useState(cast ? `/images/casts/${cast.image}` : null);
    console.log(castImage);

    const handleClose = () => {
        setOpenModal(false);
        setCast({});
    }
    const handleClickOutside = (e) => {
        if (modalRef.current && !modalRef.current.contains(e.target)) {
            handleClose();
        }
    }
    return (
        <motion.div
            initial={{ opacity: 1, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={handleClickOutside} className="fixed bg-black/60 top-0 left-0 right-0 bottom-0 zIndex flex-cols">
            <div ref={modalRef} className="inline-block sm:w-4/5 border border-border md:w-3/5 lg:w-2/5 w-full align-middle p-10 overflow-y-auto h-fit bg-main text-white rounded-2xl flex-cols relative">
                <h2 className="text-3xl font-bold">{cast ? "Update" : "Create"} Cast</h2>
                <form className="flex flex-col gap-6 text-left mt-6 w-full">
                    <Input bg={"main"} label={"Cast Name"} placeholder={cast ? cast.fullName : "John Doe"} />
                    <UploadImage label={"Cast Image"} filePreview={castImage} setFilePreview={setCastImage} />
                    <button className="w-full flex-rows gap-4 py-3 text-lg transitions hover:bg-dry border-2 border-subMain rounded bg-submain text-white">Add</button>
                </form>
                <X className="absolute top-4 right-4 size-6 border border-transparent hover:border-white rounded-md cursor-pointer" onClick={() => { handleClose() }} />
            </div>
        </motion.div>
    )
}

export default ModalCast