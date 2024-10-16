import Stars from "./Stars"


export const Message = ({ label, placeholder }) => {
    return (
        <div className="text-sm w-full">
            <label className="text-border font-semibold">{label}</label>
            <textarea className="w-full h-40 mt-2 p-6 border border-border bg-main rounded" placeholder={placeholder}></textarea>
        </div>
    )
}

export const SelectRate = ({ label, options, onChange, rating }) => {
    return (
        <div className="text-sm w-full">
            <label className="text-border font-semibold">{label}</label>
            <select className="w-full mt-2 px-6 py-2 text-text bg-main border border-border rounded" onChange={onChange}>
                {
                    options.map((option, index) => (
                        <option key={index} value={option?.value}>
                            {option.title}
                        </option>
                    ))
                }
            </select>
            <div className="flex mt-4 text-lg items-center gap-2 text-star">
                <Stars value={rating} />
            </div>
        </div>
    )
}