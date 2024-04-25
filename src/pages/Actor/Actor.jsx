import React from "react";
import NormalSearch from "../../components/Search/NormalSearch/NormalSearch";
import Table from "../../components/Table/ImageTable/Table";
import { Link } from "react-router-dom";

const Actor = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center gap-5 px-5 pb-5 ">
            <div className="w-full h-full bg-white rounded-xl flex flex-row items-center justify-between p-2">
                <NormalSearch />
            </div>
            <div className="w-full h-auto flex items-end justify-end">
                <Link
                    to={"/them-dien-vien"}
                    className="h-[50px] w-auto rounded-lg flex items-center justify-center px-3 cursor-pointer bg-[#101A33] hover:bg-[#0A3379] duration-200">
                    <p className="font-bold text-white">+ Thêm diễn viên</p>
                </Link>
            </div>
            <Table />
        </div>
    );
}

export default Actor;