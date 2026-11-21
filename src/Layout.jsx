import { Outlet } from "react-router-dom"
import Header from "./components/Header/header"
import Footer from "./components/Footer/footer"
import "./App.css"

function Layout() {

    return (
        <>
            <Header />
            <main className="global-wrapper"><Outlet /></main>
            <Footer />

        </>

    )

}

export default Layout