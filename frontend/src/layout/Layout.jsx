import Footer from "./footer/Footer"
import NavBar from "./navbar/NavBar"

const Layout = ({ children }) => {
    return (
        <>
            <div className="bg-main text-white flex flex-col h-screen">
                <NavBar />
                <div className="flex-1">
                    {children}
                </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout