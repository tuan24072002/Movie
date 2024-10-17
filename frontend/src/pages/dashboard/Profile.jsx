import { Upload } from "@/components/UsedInput"
import SideBar from "./SideBar"
import { Input } from "../../components/UsedInput"

const Profile = () => {
    return (
        <SideBar>
            <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold">
                    Profile
                </h2>
                <Upload />
                <Input label="Full Name" placeholder="Movie React Tailwind" type="text" bg="main" />
                <Input label="Email" placeholder="abc@gmail.com" type="text" bg="main" />
                <div className="flex gap-6 flex-wrap flex-col-reverse sm:flex-row justify-between items-center my-4">
                    <button className="bg-submain font-medium hover:bg-main transitions border border-submain text-white py-3 px-6 rounded w-full sm:w-auto">
                        Delete Account
                    </button>
                    <button className="bg-main font-medium hover:bg-submain transitions border border-submain text-white py-3 px-6 rounded w-full sm:w-auto">
                        Update Profile
                    </button>
                </div>
            </div>
        </SideBar>
    )
}

export default Profile