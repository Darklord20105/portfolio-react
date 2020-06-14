import React from "react"
import NavigationBar from "./Nav"

const Layout = (props) => {
    return (
        <>
            <NavigationBar />
            <main className="main-content">
                <div className="main-lines">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                {props.children}
            </main>
        </>
    )
}

export default Layout