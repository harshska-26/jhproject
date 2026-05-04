import { Outlet } from "react-router-dom"
import { Navbar } from "../components/navbar/navbar.component"
import { Sidebar } from "../components/sidebar/sidebar.component"
import "./layout.css"
import { Footer } from "../components/footer/footer.component"
import { HelpBox } from "../components/helpbox/helpbox.component"

export const Layout = () => {
    return (
        <div className="layout">
            <Sidebar/>
            <div className="right-side">
            <Navbar />
            <div className="main-container">
            <Outlet />
            <HelpBox/>
            </div>
            <Footer />
            </div>
        </div>
    )
}