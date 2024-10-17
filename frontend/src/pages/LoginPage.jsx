import Layout from "@/layout/Layout"
import { Input } from "@/components/UsedInput"
import { LogIn } from "lucide-react"
import { Link, useNavigate } from "react-router-dom"
const LoginPage = () => {
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/dashboard");
    }
    return (
        <Layout>
            <div className="container mx-auto py-2 my-24 flex-rows">
                <form onSubmit={handleSubmit} className="w-full 2xl:w-2/5 md:w-3/5 flex-cols gap-8 sm:p-14 p-8 bg-dry rounded-lg border border-border">
                    <p className="text-3xl uppercase tracking-widest font-bold text-transparent bg-gradient-to-b from-[#ff8181] to-[#F20000] bg-clip-text">
                        Movie
                    </p>
                    <Input label="Email" placeholder="abc@gmail.com" type="text" bg="main" />
                    <Input label="Password" placeholder="******" type="password" bg="main" />
                    <button className="w-full text-white p-4 bg-submain hover:bg-main transitions flex-rows gap-4 rounded-lg">
                        <LogIn /> Sign In
                    </button>
                    <p className="text-center text-border">
                        {"Don't"} have an account?
                        <Link to={"/register"} className="text-dryGray font-medium ml-2">Sign Up</Link>
                    </p>
                </form>
            </div>
        </Layout>
    )
}

export default LoginPage