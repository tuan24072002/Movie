import { useState } from "react"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
const CategoryData = [
    { title: "Category" },
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
const YearData = [
    { title: "Sort by year" },
    { title: "1700 - 1800" },
    { title: "1800 - 1900" },
    { title: "1900 - 2000" },
    { title: "2000 - 2010" },
    { title: "2010 - 2020" },
    { title: "2020 - now" },
]
const TimesData = [
    { title: "Sort by hours" },
    { title: "1 - 5 hours" },
    { title: "5 - 10 hours" },
    { title: "10 - 15 hours" },
    { title: "15 - 20 hours" },
    { title: "20 - 25 hours" },
]
const RatesData = [
    { title: "Sort by rates" },
    { title: "1 star" },
    { title: "2 star" },
    { title: "3 star" },
    { title: "4 star" },
    { title: "5 star" },
]
const Filters = () => {
    const [category, setCategory] = useState(CategoryData[0])
    const [year, setYear] = useState(YearData[0])
    const [times, setTimes] = useState(TimesData[0])
    const [rates, setRates] = useState(RatesData[0])
    const Filter = [
        {
            value: category,
            onchange: setCategory,
            items: CategoryData
        },
        {
            value: year,
            onchange: setYear,
            items: YearData
        },
        {
            value: times,
            onchange: setTimes,
            items: TimesData
        },
        {
            value: rates,
            onchange: setRates,
            items: RatesData
        },
    ]

    return (
        <div className="my-6 bg-dry border border-slate-800 text-dryGray grid md:grid-cols-4 grid-cols-2 lg:gap-12 gap-2 rounded p-6">
            {
                Filter.map((item, index) => (
                    <Select key={index} onValueChange={(value) => item.onchange({ title: value })}>
                        <div className="relative">
                            <SelectTrigger className="relative border border-slate-800 w-full text-white bg-main rounded-lg py-6 pl-6 text-left text-xs cursor-default">
                                <SelectValue placeholder={item.value.title} />
                            </SelectTrigger>
                            <SelectContent className="max-h-52">
                                {
                                    item.items.map((item2, index) => (
                                        index !== 0 && <SelectItem className={`selected-item`} key={index} value={item2.title}>{item2.title}</SelectItem>
                                    ))
                                }
                            </SelectContent>
                        </div>
                    </Select>
                ))
            }
        </div>
    )
}

export default Filters