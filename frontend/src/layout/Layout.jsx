import Footer from "./footer/Footer"
import NavBar from "./navbar/NavBar"

const Layout = ({ children }) => {
    return (
        <>
            <div className="bg-main text-white">
                <NavBar />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout