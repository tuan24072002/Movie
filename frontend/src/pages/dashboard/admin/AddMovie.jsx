import { Input, Message, UploadImage, UploadVideo, SelectBox } from "@/components/UsedInput";
import SideBar from "../SideBar";
import { useState } from "react";
import { CastsData } from "@/data/CastData";
import { BookPlus, SquarePen, Trash2 } from "lucide-react";
import ModalCast from "@/components/addmovie/ModalCast";

const AddMovie = () => {
    const [imageBackgroundPreview, setImageBackgroundPreview] = useState("");
    const [imageTitlePreview, setImageTitlePreview] = useState("");
    //Lỗi
    const [cast, setCast] = useState({});
    const [openModal, setOpenModal] = useState(false);
    const CategoryData = [
        { title: "---" },
        { title: "Romantic" },
        { title: "Action" },
        { title: "Horror" },
        { title: "Comedy" },
        { title: "Adventure" },
        { title: "Sports" },
        { title: "Fantasy" },
        { title: "Musicals" },
        { title: "Drama" },
        { title: "Thriller" },
        { title: "Western" },
        { title: "Historical" },
        { title: "Science" },
        { title: "Mystery" },
    ]
    const handleEditCast = (_cast) => {
        setCast(_cast);
        setOpenModal(prev => !prev);
    }
    return (
        <>
            <SideBar>
                <div className="flex flex-col gap-6">
                    <h2 className="text-xl font-bold">
                        Add Movie
                    </h2>
                    <div className="w-full grid md:grid-cols-2 gap-6">
                        <Input
                            label="Movie Title"
                            placeholder="Game of Thrones"
                            type="text"
                            bg="main" />
                        <Input
                            label="Hours"
                            placeholder="3"
                            type="number"
                            bg="main" />
                        <Input
                            label="Language"
                            placeholder="English"
                            type="text"
                            bg="main" />
                        <Input
                            label="Year"
                            placeholder="2024"
                            type="number"
                            bg="main" />
                    </div>
                    <UploadImage label={"Image Background"} filePreview={imageBackgroundPreview} setFilePreview={setImageBackgroundPreview} />
                    <UploadImage label={"Image Title"} filePreview={imageTitlePreview} setFilePreview={setImageTitlePreview} />
                    <Message label="Movie Description" placeholder="Make it short and sweet" />
                    <SelectBox label={"Movie Category"} options={CategoryData} />
                    <UploadVideo label={"Movie Video"} />
                    <div className="w-full grid lg:grid-cols-2 gap-6 items-start">
                        <button onClick={() => setOpenModal(true)} className="w-full py-4 bg-main border border-submain border-dashed text-white rounded">
                            Add Cast
                        </button>
                        <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-4 grid-cols-2 gap-4">
                            {
                                CastsData.map((item, index) => (
                                    <div key={index} className="p-4 italic text-xs text-text rounded flex-cols bg-main border border-border">
                                        <img src={`/images/casts/${item.image ? item.image : "user.png"}`} alt={item.fullName} className="w-full h-24 object-cover rounded mb-4" />
                                        <p>{item.fullName}</p>
                                        <div className="flex-rows mt-2 w-full gap-2">
                                            <button className=" flex-cols bg-dry border border-border text-submain rounded">
                                                <Trash2 className="size-6 p-1" />
                                            </button>
                                            <button className=" flex-cols bg-dry border border-border text-green-500 rounded" onClick={() => handleEditCast(item)}>
                                                <SquarePen className="size-6 p-1" />
                                            </button>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <button className="bg-submain font-medium hover:bg-main transitions border border-submain text-white py-4 rounded w-full sm:w-auto flex-rows gap-4">
                        <BookPlus /> Publish Movie
                    </button>
                </div>
            </SideBar>
            {
                openModal && <ModalCast setOpenModal={setOpenModal} cast={cast} setCast={setCast} />
            }
        </>
    )
}

export default AddMovie