import { Outlet } from "react-router"
import Navbar from "../../components/NavBar"

export default function MainLayout(){
    return(
        <>
            <div
                className="h-screen flex flex-col"
                style={{ background: "var(--bg)", color: "var(--text)" }}
            >
                <Navbar/>
                <div className="flex-1 overflow-hidden p-4">
                    <div className="h-full max-w-6xl mx-auto">
                        <Outlet/>
                    </div>
                </div>
            </div>
        </>
    )
}