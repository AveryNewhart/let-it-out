import React from "react";
import Footer from "./Footer";

const Layout = function({children}: React.PropsWithChildren) {
    return (
        <>
        <main>
            {children}
        </main>
        <Footer/>
        </>
    )
}

export default Layout