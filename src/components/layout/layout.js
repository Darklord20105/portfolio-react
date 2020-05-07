import React from "react"
import NavigationBar from "./Nav"
import Footer from "./Footer"

const Layout = (props) => {
    return (
        <>
            <NavigationBar />
            {props.children}
            <Footer />
        </>
    )
}

export default Layout