import React from "react";
import Table from "../../components/Table/CategoryTable/Table";
import NormalSearch from "../../components/Search/NormalSearch/NormalSearch";

const Category = () => {
    return (
        <div className="w-full h-auto flex flex-col items-center justify-center gap-5 px-5 pb-5 ">
            <div className="w-full h-full bg-white rounded-xl flex flex-row items-center justify-between p-5 gap-5">
                <NormalSearch />
            </div>
            <Table />
        </div>
    );
}

export default Category;