import React from "react";
import Table from "../../components/Table/CategoryTable/Table";
import NormalSearch from "../../components/Search/NormalSearch/NormalSearch";
import { Link } from "react-router-dom";

const Category = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center gap-5">
            <div className="w-full h-full bg-white rounded-xl flex flex-row items-center justify-between p-2">
                <NormalSearch />
            </div>
            <div className="w-full h-auto flex items-end justify-end">
                <Link
                    to={"/them-the-loai"}
                    className="h-[50px] w-auto rounded-lg flex items-center justify-center px-3 cursor-pointer bg-[#101A33] hover:bg-[#0A3379] duration-200">
                    <p className="font-bold text-white">+ Thêm thể loại</p>
                </Link>
            </div>
            <Table />
        </div>
    );
}

export default Category;