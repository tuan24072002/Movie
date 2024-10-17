import Layout from "@/layout/Layout"
import { Input } from "@/components/UsedInput"
import { LogIn } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"

const SignupPage = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/login");
    }
    return (
        <Layout>
            <div className="container mx-auto py-2 my-24 flex-rows">
                <form onSubmit={handleSubmit} className="w-full 2xl:w-2/5 md:w-3/5 flex-cols gap-8 sm:p-14 p-8 bg-dry rounded-lg border border-border">
                    <p className="text-3xl uppercase tracking-widest font-bold text-transparent bg-gradient-to-b from-[#ff8181] to-[#F20000] bg-clip-text">
                        Movie
                    </p>
                    <Input label="Full Name" placeholder="Movie React Tailwind" type="text" bg="main" />
                    <Input label="Email" placeholder="abc@gmail.com" type="text" bg="main" />
                    <div className="grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-8 w-full">
                        <Input label="Password" placeholder="******" type="password" bg="main" />
                        <Input label="Confirm Password" placeholder="******" type="password" bg="main" />
                    </div>
                    <button className="w-full text-white p-4 bg-submain hover:bg-main transitions flex-rows gap-4 rounded-lg">
                        <LogIn /> Sign Up
                    </button>
                    <p className="text-center text-border">
                        Already have an account?
                        <Link to={"/login"} className="text-dryGray font-medium ml-2">Sign In</Link>
                    </p>
                </form>
            </div>
        </Layout>
    )
}

export default SignupPage