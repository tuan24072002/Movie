import { LayoutDashboard, List, Users } from "lucide-react"
import SideBar from "../SideBar"
import TableMovie from "@/components/TableMovie"
import { MoviesData } from "@/data/MovieData"

const Dashboard = () => {
    const DashboardData = [
        {
            bg: "bg-orange-600",
            icon: List,
            title: "Total Movies",
            total: 90
        },
        {
            bg: "bg-blue-600",
            icon: LayoutDashboard,
            title: "Total Categories",
            total: 8
        },
        {
            bg: "bg-green-600",
            icon: Users,
            title: "Total Users",
            total: 134
        }
    ]
    return (
        <SideBar>
            <h2 className="text-xl font-bold">
                Dashboard
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
                {
                    DashboardData.map((data, index) => (
                        <div key={index} className="p-4 rounded bg-main border border-border grid grid-cols-4 gap-2">
                            <div className={`col-span-1 rounded-full size-12 flex-cols my-auto ${data.bg}`}>
                                <data.icon className="text-white size-5" />
                            </div>
                            <div className="col-span-3">
                                <h2>{data.title}</h2>
                                <p className="text-lg mt-2 font-bold">{data.total}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <h3 className="font-medium my-6 text-border">Recent Movies</h3>
            <TableMovie data={MoviesData.slice(0, 5)} admin={true} />
        </SideBar>
    )
}

export default Dashboard