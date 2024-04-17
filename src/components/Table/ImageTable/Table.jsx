import React from "react";
import ImageBox from "./ImageBox";

const Table = () => {
    return (
        <div className='w-full h-full grid grid-cols-4 gap-5'>
            <ImageBox />
            <ImageBox />
            <ImageBox />
            <ImageBox />
        </div>
    );
}

export default Table;
