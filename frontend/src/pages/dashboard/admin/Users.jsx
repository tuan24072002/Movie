import SideBar from "../SideBar"
import TableUser from "@/components/TableUser"
import { CastsData } from "@/data/CastData"

const Users = () => {
    return (
        <SideBar>
            <div className="flex flex-col gap-6">
                <h2 className="text-xl font-bold">
                    Users
                </h2>
                <TableUser data={CastsData} admin={true} />
            </div>
        </SideBar>
    )
}

export default Users