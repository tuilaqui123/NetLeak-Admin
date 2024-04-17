import React from "react";

const TableCategory = () => {
    return (
        <div className="flex flex-row items-center border-b border-[#0A3379] ">
            <p className="w-1/12 text-center font-bold text-xl">1</p>
            <div className="w-10/12 border-x border-[#0A3379] p-5 flex flex-row">
                <div className="w-full flex flex-col justify-center items-center">
                    <p className=" font-bold text-xl">Anime</p>
                </div>
            </div>
            <div className='w-1/12 flex items-center justify-center'>
                <div className="w-[50px] h-[50px] cursor-pointer flex items-center justify-center rounded-full hover:bg-[#0A3379] duration-150 east-out group">
                    <i class="fa-solid fa-trash text-2xl  text-[#0A3379] group-hover:text-white duration-150 east-out"></i>
                </div>
            </div>
        </div>
    );
}

export default TableCategory;