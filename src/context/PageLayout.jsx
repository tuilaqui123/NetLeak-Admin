import React from "react";
import StatusBar from "../components/Navbar/StatusBar";

const PageLayout = ({ children }) => {
    return (
        <div className=" flex flex-row">
            <div className="w-1/5 bg-black"></div>
            <div className="w-4/5 flex flex-col">
                <StatusBar />
                {children}
            </div>
        </div>
    );
}

export default PageLayout;