import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar/navbar.component"
import { Sidebar } from "../components/sidebar/sidebar.component"
import "./layout.css"
import { Footer } from "../components/footer/footer.component"

export const Layout = () => {
    return (
        <div className="layout">
            <Sidebar/>
            <div className="right-side">
            <Navbar />
            <Outlet />
            <Footer />
            </div>
        </div>
    )
}