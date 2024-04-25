import { useEffect, useContext } from "react";
import axios from "axios";
import NormalSearch from "../../components/Search/NormalSearch/NormalSearch";
import Table from "../../components/Table/UserTable/Table";
import { UserContext } from "../../context/user/userContext";


const User = () => {
    const { users , setUsers } = useContext(UserContext)
    console.log(users)

    return (
            <div className="w-full h-auto flex flex-col items-center justify-center gap-5 pb-5 ">
                <div className="w-full bg-white rounded-xl flex flex-row items-center justify-between p-2 ">
                    <NormalSearch/>
                </div>
                {users ? (
                    <Table/>
                )
                : <div>loading</div>}
            </div>
    );
}

export default User;