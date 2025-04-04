import { Outlet } from "react-router-dom"
import Header from "../Component/Header"

export default function DefaultLayout() {
    return (
        <>
            <Header />
            <Outlet />
        </>

    )
}