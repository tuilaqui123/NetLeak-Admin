import React from "react";
import Search from "../../components/Search/MovieSearch/Search";
import Table from "../../components/Table/MovieTable/Table";
import { Link } from "react-router-dom";

const Movie = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center gap-5 bg-[#67718a]">
            <div className="w-full h-full bg-white rounded-xl flex flex-col items-center py-5 gap-5">
                <Search />
            </div>
            <div className="w-full h-auto flex items-end justify-end">
                <Link
                    to={"/them-phim"}
                    className="h-[50px] w-auto rounded-lg flex items-center justify-center px-3 cursor-pointer bg-[#101A33] hover:bg-[#0A3379] duration-200">
                    <p className="font-bold text-white">+ Thêm phim</p>
                </Link>
            </div>
            <Table />
        </div>
    );
}

export default Movie;