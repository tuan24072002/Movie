import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
    DialogClose,
} from "@/components/ui/dialog"
import { Input } from "../UsedInput"
import { CirclePlus } from "lucide-react"

const ModalAdd = () => {
    return (
        <Dialog>
            <DialogTrigger className="bg-submain font-medium transitions group hover:bg-main border border-submain text-white rounded py-2 px-4 flex-rows gap-4"><CirclePlus className="size-5" /> Create</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Create</DialogTitle>
                </DialogHeader>
                <Input label="Category Name" placeholder="Actions" bg="main" type="text" />
                <DialogClose>
                    <button className="w-full py-4 rounded flex-cols bg-submain hover:bg-transparent transitions border-2 border-submain text-white">
                        Add
                    </button>
                </DialogClose>
            </DialogContent>
        </Dialog>
    )
}

export default ModalAdd