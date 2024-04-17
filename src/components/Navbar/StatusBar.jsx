import React from "react";
import Breadcrumb from "../Breadcrumb/Breadcrumb";

const StatusBar = () => {
    return (
        <div className="w-full h-[100px] flex items-center justify-center px-5">
            <div className="w-full flex flex-row justify-between items-center">
                <div className="flex flex-row items-center gap-5 bg-white p-1 border border-[#0A3379] rounded-full pr-5">
                    <div className="w-[40px] h-[40px] flex items-center border border-[#0A3379] border-dashed justify-center ] hover:bg-[#0A3379] rounded-full cursor-pointer duration-150 group">
                        <i class="fa-solid fa-bars text-xl group-hover:text-white duration-150"></i>
                    </div>
                    <Breadcrumb
                        name={"Doanh thu"}
                        icon={"fa-solid fa-chart-simple"}
                        link={""}
                    />
                </div>
                <div className="w-1/5 bg-white border border-[#0A3379] p-1 rounded-full">
                    <div className="w-[40px] h-[40px] flex items-center justify-center bg-[#0A3379] rounded-full cursor-pointer ">
                        <i class="fa-solid fa-user text-xl text-white "></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default StatusBar;
