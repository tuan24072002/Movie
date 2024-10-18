import { Input } from "@/components/UsedInput"
import SideBar from "./SideBar"

const Password = () => {
    return (
        <SideBar>
            <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold">
                    Change Password
                </h2>
                <Input label="Previous Password" placeholder="******" type="password" bg="main" />
                <Input label="New Password" placeholder="******" type="password" bg="main" />
                <Input label="Confirm Password" placeholder="******" type="password" bg="main" />
                <div className="flex justify-end items-center my-4">
                    <button className="bg-main font-medium hover:bg-submain transitions border border-submain text-white py-3 px-6 rounded w-full sm:w-auto">
                        Submit
                    </button>
                </div>
            </div>
        </SideBar>
    )
}

export default Password