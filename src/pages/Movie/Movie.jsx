import React from "react";
import Search from "../../components/Search/MovieSearch/Search";
import Table from "../../components/Table/MovieTable/Table";

const Movie = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center gap-5 px-5 pb-5 ">
            <div className="w-full h-full bg-white rounded-xl flex flex-col items-center py-5 gap-5">
                <Search />
            </div>
            <Table />
        </div>
    );
}

export default Movie;