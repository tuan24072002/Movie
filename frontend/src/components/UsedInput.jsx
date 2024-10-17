import { Eye, EyeOff, CloudUpload } from "lucide-react"
import Stars from "./Stars"
import { useState } from "react"
import { useDropzone } from "react-dropzone"

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

export const Input = ({ label, placeholder, type, bg }) => {
    const [isPassword, setIsPassword] = useState(type === "password");
    return (
        <div className="text-sm w-full">
            <label className="text-border font-semibold">{label}</label>
            <div className="relative mt-2">
                <input
                    type={type === "password" ? (isPassword ? "password" : "text") : type}
                    className={`w-full text-sm p-5 border border-border rounded text-white bg-${bg}`}
                    placeholder={placeholder} />
                {
                    type === "password" &&
                    <div className="absolute right-2 top-1/2 transform -translate-y-1/2" onClick={() => setIsPassword(prev => !prev)}>
                        {
                            isPassword
                                ? <Eye className="size-5" />
                                : <EyeOff className="size-5" />
                        }
                    </div>
                }
            </div>
        </div>
    )
}

export const Upload = () => {
    const { getRootProps, getInputProps } = useDropzone({
        multiple: false,
        maxSize: 100000,
        onDrop: (acceptedFiles) => {
            alert(acceptedFiles[0].name)
        }
    })
    return (
        <label htmlFor="file" className="w-full text-center">
            <div
                {...getRootProps()}
                className="px-6 py-8 border-2 border-border border-dashed bg-main rounded-md cursor-pointer">
                <input {...getInputProps} hidden id="file" />
                <span className="mx-auto flex-cols text-submain">
                    <CloudUpload className="size-8" />
                </span>
                <p className="text-sm mt-2">Drag your image here</p>
                <em className="text-xs text-border mt-2">(only .jpg and .png files will be accepted)</em>
            </div>
        </label>
    )
}